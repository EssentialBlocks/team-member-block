/**
 * WordPress depencencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import { TeamMembersIcon } from "../util/icons";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import "./style.scss";

import example from "./example";

import metadata from "../block.json";

const { name, category } = metadata;

registerBlockType(name, {
	title: __("Team Members", "essential-blocks"),
	description: __(
		"Present your team members beautifully & gain instant credibility"
	),
	icon: TeamMembersIcon,
	category,
	attributes,
	keywords: [
		__("team", "essential-blocks"),
		__("member", "essential-blocks"),
		__("eb essential", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example,
});
