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
	title: __("Team Member", "essential-blocks"),
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
	supports: {
		// inserter: false,
		// reusable: false,
		// html: false,
		// anchor: true,
		// Declare support for specific alignment options.
		// align: ["wide", "full"],
		align: true,
	},
	edit: Edit,
	save: Save,
	example,
});
