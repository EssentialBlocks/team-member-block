const { __ } = wp.i18n;
const { Dashicon } = wp.components;

export const sizeUnitTypes = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const IconsHzAligns = [
	{ label: "Center", value: "center" },
	{ label: "Left", value: "flex-start" },
	{ label: "Right", value: "flex-end" },
	{ label: "Space Between", value: "space-between" },
	{ label: "Space Around", value: "space-around" },
	{ label: "Space Evenly", value: "space-evenly" },
];

export const ContentsVerticalAligns = [
	{ label: "Top", value: "flex-start" },
	{ label: "Center", value: "center" },
	{ label: "Bottom", value: "flex-end" },
];

export const STYLE_PRESETS = [
	{ label: __("Default"), value: "default" },
	{ label: __("Preset 1"), value: "preset1" },
	{ label: __("Preset 2 (hover overly)"), value: "preset2" }, // this was preset 3
	{ label: __("Preset 3  (hover overly)"), value: "preset3" }, // this was preset 5
	{ label: __("Preset 4 (hover overly)"), value: "preset4" }, // this was preset 8
	{ label: __("Preset 5"), value: "preset5" }, // this was preset 9
	{ label: __("Preset 6"), value: "preset6" }, // this was preset 15
];

export const separatorTypes = [
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];
