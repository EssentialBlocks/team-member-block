/**
 * WordPress depencencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import { TeamMembersIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import example from "./example";
import deprecated from "./deprecated";
import metadata from "../block.json";

import "./style.scss";

const { ebConditionalRegisterBlockType } = EBTeamMemberControls;

ebConditionalRegisterBlockType(metadata, {
    icon: TeamMembersIcon,
    attributes,
    keywords: [
        __("team", "team-member-block"),
        __("member", "team-member-block"),
        __("eb essential", "team-member-block"),
    ],
    edit: Edit,
    save: Save,
    example,
    deprecated,
});
