/**
 * What "settings" mean for a Team Member block, and how to apply them to another block.
 */
import { getBlockType } from "@wordpress/blocks";

export const TEAM_MEMBER_BLOCK = "team-member-block/team-member-block";

// Identity of one block instance and the CSS generated for it: never copied.
// The block regenerates its CSS from the pasted settings under its own ID.
export const INSTANCE_KEYS = ["blockId", "blockMeta", "commonStyles", "resOption", "lock", "metadata", "anchor"];

// The person: kept as-is when pasting the design only.
export const PERSON_KEYS = [
    "name",
    "jobTitle",
    "description",
    "imageUrl",
    "imageId",
    "imageAlt",
    "avatarURL",
    "newWindow",
    "socialDetails",
    "profilesOnly",
];

// Left out of the site-wide default: text and the profile link belong to one person.
// (Photo, social networks and their colours are kept; social links are emptied.)
export const DEFAULT_EXCLUDED_KEYS = ["name", "jobTitle", "description", "avatarURL", "newWindow", "profilesOnly"];

const clone = (value) => (value === undefined ? undefined : JSON.parse(JSON.stringify(value)));
const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

function definitions() {
    return getBlockType(TEAM_MEMBER_BLOCK)?.attributes || {};
}

/** The rendered social list the block saves; mirrors the block's own effect. */
export function profilesFrom(socialDetails) {
    return (Array.isArray(socialDetails) ? socialDetails : []).map(({ title, icon, link, linkOpenNewTab }) => ({
        title,
        icon,
        link,
        linkOpenNewTab,
    }));
}

/** Every setting of a block (design, image, social profiles, text, toggles), as plain JSON. */
export function getSettings(attributes) {
    const settings = {};
    Object.keys(definitions()).forEach((key) => {
        if (!INSTANCE_KEYS.includes(key) && attributes[key] !== undefined) {
            settings[key] = clone(attributes[key]);
        }
    });
    return settings;
}

/** Settings stored as the site-wide default. */
export function getDefaultSettings(attributes) {
    const settings = getSettings(attributes);
    DEFAULT_EXCLUDED_KEYS.forEach((key) => delete settings[key]);
    if (Array.isArray(settings.socialDetails)) {
        settings.socialDetails = settings.socialDetails.map((profile) => ({
            ...profile,
            link: "",
            linkOpenNewTab: false,
            isExpanded: false,
        }));
    }
    return settings;
}

/**
 * Attributes that make a block match `settings`.
 *
 * mode "all":     everything, including the person's text, photo and social profiles.
 * mode "design":  everything except the person; social icons keep their links but take the colours.
 * mode "default": everything except DEFAULT_EXCLUDED_KEYS (used for brand-new blocks).
 *
 * Settings missing from `settings` are reset to the block's declared default, so the result is
 * an exact match rather than a merge.
 */
export function buildUpdate(settings, targetAttributes, mode) {
    const defs = definitions();
    const skip = [
        ...INSTANCE_KEYS,
        "socialDetails",
        "profilesOnly",
        ...(mode === "design" ? PERSON_KEYS : []),
        ...(mode === "default" ? DEFAULT_EXCLUDED_KEYS : []),
    ];
    const update = {};

    Object.keys(defs).forEach((key) => {
        if (skip.includes(key)) {
            return;
        }
        update[key] = has(settings, key) ? clone(settings[key]) : clone(defs[key].default);
    });

    const sourceSocial = Array.isArray(settings.socialDetails) ? settings.socialDetails : null;
    if (mode === "design") {
        if (sourceSocial && sourceSocial.length && Array.isArray(targetAttributes.socialDetails)) {
            update.socialDetails = targetAttributes.socialDetails.map((profile, index) => {
                const source = sourceSocial[Math.min(index, sourceSocial.length - 1)];
                return { ...profile, color: source.color, bgColor: source.bgColor };
            });
        }
    } else if (sourceSocial) {
        update.socialDetails = clone(sourceSocial).map((profile) => ({ ...profile, isExpanded: false }));
    }
    if (update.socialDetails) {
        update.profilesOnly = profilesFrom(update.socialDetails);
    }
    return update;
}
