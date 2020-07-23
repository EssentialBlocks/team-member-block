const { __ } = wp.i18n;

export const DEFAULT_SHADOW_COLOR = "#000000";
export const DEFAULT_BORDER_COLOR = "#000000";
export const UPLOAD_BUTTON_HEIGHT = 150;
export const UPLOAD_BUTTON_WIDTH = 150;
export const DEFAULT_NAME_SIZE = "24";
export const DEFAULT_NAME_COLOR = "#4b4b4b";
export const DEFAULT_JOB_TITLE_COLOR = "#4a5059";
export const DEFAULT_JOB_TITLE_SIZE = "18";
export const DEFAULT_JOB_DETAILS_SIZE = "18";
export const DEFAULT_JOB_DETAILS_COLOR = "#9f9f9f";
export const DEFAULT_PROFILE_SIZE = "32";
export const DEFAULT_PROFILE_COLOR = "#9f9f9f";

export const IMAGE_SIZES = [
	{ label: __("Large"), value: "large" },
	{ label: __("Medium"), value: "medium" },
	{ label: __("Small"), value: "small" },
	{ label: __("Thumbnail"), value: "thumbnail" },
	{ label: __("Full"), value: "full" },
	{ label: __("Custom"), value: "custom" },
];

export const IMAGE_SHAPES = [
	{ label: __("Square"), value: 0 },
	{ label: __("Circular"), value: 50 },
];

export const CONTACT_ALIGNS = [
	{ label: __("Left"), value: "left" },
	{ label: __("Right"), value: "right" },
	{ label: __("Center"), value: "center" },
	{ label: __("Justify"), value: "justify" },
];

export const ICON_ALIGN = [
	{ label: __("Left"), value: "flex-start" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "flex-end" },
];

export const BORDER_STYLES = [
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];
