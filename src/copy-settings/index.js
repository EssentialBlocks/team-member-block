/**
 * Team Member "Copy Settings".
 *
 * - Copy a member's settings, then paste them into another member: everything (design/CSS,
 *   photo, social profiles, text, toggles) or the design only (keeps that person's own
 *   name, photo, text and links).
 * - Apply one member's design to every Team Member on the page.
 * - Save a member's settings as the site-wide default; new members start from it.
 */

// Classic JSX runtime: the automatic one needs the `react-jsx-runtime` script (WordPress 6.6+),
// while this plugin supports WordPress 6.0+.
/** @jsxRuntime classic */
/** @jsx createElement */
/** @jsxFrag Fragment */
import { __, sprintf } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { createElement, createPortal, Fragment, useEffect, useRef, useState } from "@wordpress/element";
import { BlockControls, InspectorControls } from "@wordpress/block-editor";
import { Button, DropdownMenu, MenuGroup, MenuItem, PanelBody, ToggleControl, ToolbarGroup } from "@wordpress/components";
import { select, dispatch, useDispatch } from "@wordpress/data";
import apiFetch from "@wordpress/api-fetch";

import { TEAM_MEMBER_BLOCK, buildUpdate, getDefaultSettings, getSettings } from "./settings";

const CLIPBOARD_KEY = "teamMemberBlockCopiedSettings";
const REST_PATH = "/team-member-block/v1/default-settings";

// Inline styles: the build extracts every stylesheet into dist/style.css (the block's
// frontend CSS), so this editor-only panel carries its few rules itself.
const HELP_STYLE = { margin: "0 0 12px", color: "#757575", fontSize: "12px" };
const BUTTONS_STYLE = { display: "grid", gridTemplateColumns: "1fr", gap: "8px", marginBottom: "16px" };
// Inside the block's tabs, its own CSS restyles buttons (pale secondary, capitalised labels);
// keep sentence case and let long labels wrap instead of overflowing.
const BUTTON_STYLE = {
    width: "100%",
    height: "auto",
    minHeight: "36px",
    justifyContent: "center",
    textAlign: "center",
    textTransform: "none",
    whiteSpace: "normal",
    lineHeight: 1.4,
};
// The block's pale secondary colour would otherwise win over the destructive red.
const DESTRUCTIVE_STYLE = { ...BUTTON_STYLE, color: "#cc1818" };

// The block renders its own tabbed sidebar (.eb-panel-control > .eb-parent-tab-panel) and each
// tab's panels inside `.eb-tab-controls{tab}`. The Copy Settings panel is mounted in the
// General tab so it shows on that tab only and gets the same panel styling as its neighbours.
const TABS_SELECTOR = ".block-editor-block-inspector .eb-panel-control .eb-parent-tab-panel";
const GENERAL_TAB_SELECTOR = `${TABS_SELECTOR} .eb-tab-controlsgeneral`;

// Dashicons: available in every supported WordPress version.

const ICONS = { menu: "admin-page", copy: "admin-page", paste: "clipboard", design: "admin-appearance", all: "groups", reset: "undo", check: "yes" };

// Server-provided state (includes/copy-settings.php).
const boot = window.teamMemberBlockCopySettings || {};
const state = {
    defaultSettings: boot.default || null,
    autoApply: !!boot.autoApply,
    canManage: !!boot.canManage,
    clipboard: null,
};

function hasDefault() {
    return !!(state.defaultSettings && Object.keys(state.defaultSettings).length);
}

function readClipboard() {
    if (state.clipboard) {
        return state.clipboard;
    }
    try {
        const parsed = JSON.parse(window.localStorage.getItem(CLIPBOARD_KEY) || "null");
        if (parsed && parsed.settings && typeof parsed.settings === "object" && !Array.isArray(parsed.settings)) {
            state.clipboard = parsed;
        }
    } catch (e) {
        // Storage blocked or unreadable: the in-memory clipboard still works.
    }
    return state.clipboard;
}

function writeClipboard(settings) {
    state.clipboard = { settings };
    try {
        // Shared across tabs and posts of this site, so settings can be pasted on another page.
        window.localStorage.setItem(CLIPBOARD_KEY, JSON.stringify(state.clipboard));
    } catch (e) {
        // Ignore: in-memory clipboard is enough within this editor session.
    }
}

/** Every Team Member block in the editor, including ones nested in groups/columns. */
function getAllTeamMemberClientIds() {
    const { getBlockOrder, getBlockName } = select("core/block-editor");
    const ids = [];
    const walk = (rootClientId) => {
        getBlockOrder(rootClientId).forEach((clientId) => {
            if (getBlockName(clientId) === TEAM_MEMBER_BLOCK) {
                ids.push(clientId);
            }
            walk(clientId);
        });
    };
    walk("");
    return ids;
}

/**
 * Where the panel goes while the block is selected:
 * - { mode: "tab", host }  inside the General tab (host is a node kept as its last child);
 * - { mode: "tab", host: null }  another tab is open, so the panel is hidden;
 * - { mode: "plain" }  the block's tab structure isn't there; use a regular sidebar panel.
 */
function usePanelPlacement(isSelected) {
    const [placement, setPlacement] = useState({ mode: "tab", host: null });

    useEffect(() => {
        if (!isSelected) {
            return undefined;
        }
        let host = null;
        let current = null;
        const update = (next) => {
            if (!current || current.mode !== next.mode || current.host !== next.host) {
                current = next;
                setPlacement(next);
            }
        };
        const place = () => {
            const inspector = document.querySelector(".block-editor-block-inspector");
            if (!inspector) {
                return;
            }
            if (!document.querySelector(TABS_SELECTOR)) {
                update({ mode: "plain", host: null });
                return;
            }
            const generalTab = document.querySelector(GENERAL_TAB_SELECTOR);
            if (!generalTab) {
                update({ mode: "tab", host: null });
                return;
            }
            if (!host || !generalTab.contains(host)) {
                host = document.createElement("div");
                host.className = "tmb-copy-settings-host";
            }
            // Keep it after the block's own panels, also when one of them appears later.
            if (generalTab.lastElementChild !== host) {
                generalTab.appendChild(host);
            }
            update({ mode: "tab", host });
        };

        place();
        // The tab content is re-created when the user switches tabs or the sidebar re-renders.
        // Checks are batched to one per animation frame.
        let frame = 0;
        const schedule = () => {
            if (!frame) {
                frame = window.requestAnimationFrame(() => {
                    frame = 0;
                    place();
                });
            }
        };
        const observer = new window.MutationObserver(schedule);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => {
            observer.disconnect();
            if (frame) {
                window.cancelAnimationFrame(frame);
            }
            if (host && host.parentNode) {
                host.parentNode.removeChild(host);
            }
        };
    }, [isSelected]);

    return placement;
}

function CopySettings({ clientId, attributes, setAttributes, isSelected }) {
    const { createSuccessNotice, createErrorNotice } = useDispatch("core/notices");
    const [, rerender] = useState(0);
    const [isBusy, setIsBusy] = useState(false);
    const initialBlockId = useRef(attributes.blockId);
    const placement = usePanelPlacement(isSelected);

    // No blockId on first render means the block was just inserted (copies/duplicates keep theirs).
    useEffect(() => {
        if (!initialBlockId.current && state.autoApply && hasDefault()) {
            setAttributes(buildUpdate(state.defaultSettings, attributes, "default"));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isSelected) {
        return null;
    }

    const notify = (message) => createSuccessNotice(message, { type: "snackbar" });
    const fail = (error, fallback) => createErrorNotice(error?.message || fallback, { type: "snackbar" });
    const clipboard = readClipboard();

    const onCopy = () => {
        writeClipboard(getSettings(attributes));
        rerender((n) => n + 1);
        notify(__("Team Member settings copied.", "team-member-block"));
    };

    const onPaste = (mode) => {
        if (!clipboard) {
            return;
        }
        setAttributes(buildUpdate(clipboard.settings, attributes, mode));
        notify(
            mode === "all"
                ? __("All settings pasted.", "team-member-block")
                : __("Design pasted. Name, photo, text and links were kept.", "team-member-block")
        );
    };

    const onApplyDesignToAll = () => {
        const settings = getSettings(attributes);
        const { getBlockAttributes } = select("core/block-editor");
        const targets = getAllTeamMemberClientIds().filter((id) => id !== clientId);
        targets.forEach((id) => {
            dispatch("core/block-editor").updateBlockAttributes(id, buildUpdate(settings, getBlockAttributes(id), "design"));
        });
        notify(
            sprintf(
                /* translators: %d: number of Team Member blocks updated. */
                __("Design applied to %d other Team Member block(s).", "team-member-block"),
                targets.length
            )
        );
    };

    const saveDefault = async (data, message) => {
        setIsBusy(true);
        try {
            const response = await apiFetch({ path: REST_PATH, method: "POST", data });
            state.defaultSettings = response.default;
            state.autoApply = !!response.autoApply;
            notify(message);
        } catch (error) {
            fail(error, __("Could not save the default settings.", "team-member-block"));
        } finally {
            setIsBusy(false);
        }
    };

    const onSaveDefault = () =>
        saveDefault(
            { settings: getDefaultSettings(attributes), autoApply: true },
            __("Saved as default. New Team Members will start with these settings.", "team-member-block")
        );

    const onToggleAutoApply = (autoApply) =>
        saveDefault(
            { autoApply },
            autoApply
                ? __("New Team Members will start with the default settings.", "team-member-block")
                : __("New Team Members will start with the plugin's original settings.", "team-member-block")
        );

    const onRemoveDefault = async () => {
        setIsBusy(true);
        try {
            await apiFetch({ path: REST_PATH, method: "DELETE" });
            state.defaultSettings = null;
            state.autoApply = false;
            notify(__("Default settings removed.", "team-member-block"));
        } catch (error) {
            fail(error, __("Could not remove the default settings.", "team-member-block"));
        } finally {
            setIsBusy(false);
        }
    };

    const onApplyDefault = () => {
        setAttributes(buildUpdate(state.defaultSettings, attributes, "design"));
        notify(__("Default design applied.", "team-member-block"));
    };

    const menu = ({ onClose }) => {
        const run = (fn) => () => {
            fn();
            onClose();
        };
        return (
            <>
                <MenuGroup label={__("Copy & paste", "team-member-block")}>
                    <MenuItem icon={ICONS.copy} onClick={run(onCopy)}>
                        {__("Copy settings", "team-member-block")}
                    </MenuItem>
                    <MenuItem icon={ICONS.paste} disabled={!clipboard} onClick={run(() => onPaste("all"))}>
                        {__("Paste all settings", "team-member-block")}
                    </MenuItem>
                    <MenuItem icon={ICONS.design} disabled={!clipboard} onClick={run(() => onPaste("design"))}>
                        {__("Paste design only", "team-member-block")}
                    </MenuItem>
                    <MenuItem icon={ICONS.all} onClick={run(onApplyDesignToAll)}>
                        {__("Apply design to all members", "team-member-block")}
                    </MenuItem>
                </MenuGroup>
                {(hasDefault() || state.canManage) && (
                    <MenuGroup label={__("Default settings", "team-member-block")}>
                        {hasDefault() && (
                            <MenuItem onClick={run(onApplyDefault)}>
                                {__("Apply default design", "team-member-block")}
                            </MenuItem>
                        )}
                        {state.canManage && (
                            <MenuItem disabled={isBusy} onClick={run(onSaveDefault)}>
                                {__("Save as default", "team-member-block")}
                            </MenuItem>
                        )}
                        {state.canManage && hasDefault() && (
                            <MenuItem
                                disabled={isBusy}
                                icon={state.autoApply ? ICONS.check : undefined}
                                isSelected={state.autoApply}
                                role="menuitemcheckbox"
                                onClick={run(() => onToggleAutoApply(!state.autoApply))}
                            >
                                {__("Use default for new members", "team-member-block")}
                            </MenuItem>
                        )}
                        {state.canManage && hasDefault() && (
                            <MenuItem icon={ICONS.reset} disabled={isBusy} onClick={run(onRemoveDefault)}>
                                {__("Remove default", "team-member-block")}
                            </MenuItem>
                        )}
                    </MenuGroup>
                )}
            </>
        );
    };

    const panel = (
        <PanelBody title={__("Copy Settings", "team-member-block")} initialOpen={false}>
            <p style={HELP_STYLE}>
                {__(
                    "Copy this member's settings, then paste them into another member. \"Paste all settings\" also brings the photo, social profiles and text; \"Paste design only\" keeps that member's own name, photo, text and links.",
                    "team-member-block"
                )}
            </p>
            <div style={BUTTONS_STYLE}>
                <Button variant="primary" icon={ICONS.copy} style={BUTTON_STYLE} onClick={onCopy}>
                    {__("Copy settings", "team-member-block")}
                </Button>
                <Button variant="primary" icon={ICONS.paste} style={BUTTON_STYLE} disabled={!clipboard} onClick={() => onPaste("all")}>
                    {__("Paste all settings", "team-member-block")}
                </Button>
                <Button variant="primary" icon={ICONS.design} style={BUTTON_STYLE} disabled={!clipboard} onClick={() => onPaste("design")}>
                    {__("Paste design only", "team-member-block")}
                </Button>
                <Button variant="primary" icon={ICONS.all} style={BUTTON_STYLE} onClick={onApplyDesignToAll}>
                    {__("Apply design to all members", "team-member-block")}
                </Button>
            </div>
            {(state.canManage || hasDefault()) && (
                <>
                    <p style={HELP_STYLE}>
                        {__(
                            "Default settings: every newly added Team Member starts with them, on any page. The design, photo and social networks are kept; name, text and links are not.",
                            "team-member-block"
                        )}
                    </p>
                    <div style={BUTTONS_STYLE}>
                        {hasDefault() && (
                            <Button variant="primary" style={BUTTON_STYLE} onClick={onApplyDefault}>
                                {__("Apply default design", "team-member-block")}
                            </Button>
                        )}
                        {state.canManage && (
                            <Button variant="primary" style={BUTTON_STYLE} isBusy={isBusy} disabled={isBusy} onClick={onSaveDefault}>
                                {__("Save as default", "team-member-block")}
                            </Button>
                        )}
                        {state.canManage && hasDefault() && (
                            <Button variant="secondary" isDestructive style={DESTRUCTIVE_STYLE} disabled={isBusy} onClick={onRemoveDefault}>
                                {__("Remove default", "team-member-block")}
                            </Button>
                        )}
                    </div>
                    {state.canManage && hasDefault() && (
                        <ToggleControl
                            __nextHasNoMarginBottom
                            label={__("Use default for new members", "team-member-block")}
                            checked={state.autoApply}
                            disabled={isBusy}
                            onChange={onToggleAutoApply}
                        />
                    )}
                </>
            )}
        </PanelBody>
    );

    return (
        <>
            <BlockControls group="other">
                <ToolbarGroup>
                    <DropdownMenu
                        icon={ICONS.menu}
                        label={__("Copy / paste Team Member settings", "team-member-block")}
                        toggleProps={{ showTooltip: true }}
                    >
                        {menu}
                    </DropdownMenu>
                </ToolbarGroup>
            </BlockControls>
            {placement.mode === "plain" && <InspectorControls>{panel}</InspectorControls>}
            {placement.mode === "tab" && placement.host && createPortal(panel, placement.host)}
        </>
    );
}

const withCopySettings = createHigherOrderComponent(
    (BlockEdit) => (props) => {
        if (props.name !== TEAM_MEMBER_BLOCK) {
            return <BlockEdit {...props} />;
        }
        return (
            <>
                <BlockEdit {...props} />
                <CopySettings {...props} />
            </>
        );
    },
    "withTeamMemberCopySettings"
);

addFilter("editor.BlockEdit", "team-member-block/copy-settings", withCopySettings);
