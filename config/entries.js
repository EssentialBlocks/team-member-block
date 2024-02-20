//Export All Controls
import "../controls/src/backend.scss";

//Export All Controls
export { default as ResponsiveDimensionsControl } from "../controls/src/controls/dimensions-control-v2";
export { default as TypographyDropdown } from "../controls/src/controls/typography-control-v2";
export { default as ColorControl } from "../controls/src/controls/color-control";
export { default as BorderShadowControl } from "../controls/src/controls/border-shadow-control";
export { default as BackgroundControl } from "../controls/src/controls/background-control";
export { default as ResponsiveRangeController } from "../controls/src/controls/responsive-range-control";
export { default as faIcons } from "../controls/src/extras/faIcons";
export { default as ImageAvatar } from "../controls/src/controls/image-avatar";
export { default as GradientColorControl } from "../controls/src/controls/gradient-color-controller";
export { default as DealSocialProfiles } from "../controls/src/controls/social-profiles-v2/DealSocialProfiles";
export { default as DynamicInputValueHandler } from "../controls/src/controls/dynamic-field/DynamicInputValueHandler";
export { EBIconPicker, EBDisplayIcon } from "../controls/src/controls/icon-picker";
export {
	LeftAlignIcon,
	RightAlignIcon,
	CenterAlignIcon,
} from "../controls/src/extras/icons";

import "../controls/src/group-controls";
export { default as AdvancedControls } from "../controls/src/group-controls/components/advanced-controls";

//Export Helper Functions
export {
	softMinifyCssStrings,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateBackgroundControlStyles,
	generateResponsiveRangeStyles,
	duplicateBlockIdFix,
	generateTypographyAttributes,
	generateDimensionsAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes,
	ebConditionalRegisterBlockType,
	StyleComponent,

} from "../controls/src/helpers";
