/**
 * WordPress dependencies
 */
import {__} from "@wordpress/i18n"
import { Component, Fragment } from "@wordpress/element"
import {
	PanelBody,
	SelectControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Dropdown,
} from "@wordpress/components"
import{ InspectorControls, PanelColorSettings }  from "@wordpress/block-editor"

/**
 * Internal dependencies
 */
import ImageAvatar from "../util/image-avatar/ImageAvater";
import DealSocialProfiles from "../util/social-profiles/DealSocialProfiles";
import {
	IMAGE_SHAPES,
	IMAGE_SIZES,
	ICON_ALIGN,
	BORDER_STYLES,
	DEFAULT_NAME_SIZE,
	DEFAULT_NAME_COLOR,
	DEFAULT_SHADOW_COLOR,
	DEFAULT_BORDER_COLOR,
	UPLOAD_BUTTON_HEIGHT,
	UPLOAD_BUTTON_WIDTH,
	DEFAULT_JOB_TITLE_SIZE,
	DEFAULT_JOB_DETAILS_SIZE,
	DEFAULT_JOB_DETAILS_COLOR,
	DEFAULT_JOB_TITLE_COLOR,
	DEFAULT_PROFILE_COLOR,
	DEFAULT_PROFILE_SIZE,
	FONT_WEIGHTS,
	TEXT_DECORATION,
	TEXT_TRANSFORM,
} from "./constants";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import IconList from "../util/social-profiles/IconList";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";

class Inspector extends Component {
	onSizeSelect = (newSize) => {
		switch (newSize) {
			case "thumbnail":
				this.props.setAttributes({
					imageWidth: "150",
					imageHeight: "150",
					customSize: false,
					imageSize: newSize,
				});
				break;

			case "small":
				this.props.setAttributes({
					imageWidth: "200",
					imageHeight: "200",
					customSize: false,
					imageSize: newSize,
				});
				break;

			case "medium":
				this.props.setAttributes({
					imageWidth: "400",
					imageHeight: "200",
					customSize: false,
					imageSize: newSize,
				});
				break;

			case "large":
				this.props.setAttributes({
					imageWidth: "600",
					imageHeight: "230",
					customSize: false,
					imageSize: newSize,
				});
				break;

			case "full":
				this.props.setAttributes({
					imageWidth: "610",
					imageHeight: "231",
					customSize: false,
					imageSize: newSize,
				});
				break;

			case "custom":
				this.props.setAttributes({
					customSize: true,
					imageSize: newSize,
				});
				break;
		}
	};

	render() {
		const { attributes, setAttributes } = this.props;
		const {
			imageSize,
			imageUrl,
			imageHeight,
			imageWidth,
			customSize,
			borderRadius,
			nameColor,
			jobTitleColor,
			jobDetailsColor,
			nameFontSize,
			jobTitleFontSize,
			jobDetailsFontSize,
			socialIconSize,
			socialProfiles,
			socialIconSpacing,
			socialIconColor,
			socialIconAlign,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			shadowColor,
			shadowHOffset,
			shadowVOffset,
			shadowBlur,
			shadowSpread,
			borderColor,
			borderWidth,
			borderStyle,
			nameUnit,
			jobTitleUnit,
			jobDetailsUnit,
			marginUnit,
			paddingUnit,
			iconSizeUnit,
			iconSpaceUnit,
			nameFontFamily,
			nameFontWeight,
			nameTextDecoration,
			nameTextTransform,
			nameLineHeight,
			nameLineHeightUnit,
			nameLetterSpacing,
			nameLetterSpacingUnit,
			jobTitleFontFamily,
			jobTitleFontSizeUnit,
			jobTitleFontWeight,
			jobTitleTextDecoration,
			jobTitleTextTransform,
			jobTitleLineHeight,
			jobTitleLineHeightUnit,
			jobTitleLetterSpacing,
			jobTitleLetterSpacingUnit,
			detailsFontFamily,
			detailsFontSizeUnit,
			detailsFontWeight,
			detailsTextDecoration,
			detailsTextTransform,
			detailsLineHeight,
			detailsLineHeightUnit,
			detailsLetterSpacing,
			detailsLetterSpacingUnit,
		} = attributes;

		const hasProfile = socialProfiles.length > 0 ? true : false;

		const NAME_SIZE_STEP = nameUnit === "em" ? 0.1 : 1;
		const NAME_SIZE_MAX = nameUnit === "em" ? 10 : 100;

		const NAME_LINE_HEIGHT_STEP = nameLineHeightUnit === "em" ? 0.1 : 1;
		const NAME_LINE_HEIGHT_MAX = nameLineHeightUnit === "em" ? 10 : 100;

		const NAME_SPACING_STEP = nameLetterSpacingUnit === "em" ? 0.1 : 1;
		const NAME_SPACING_MAX = nameLetterSpacingUnit === "em" ? 10 : 100;

		const JOB_SIZE_STEP = jobTitleUnit === "em" ? 0.1 : 1;
		const JOB_SIZE_MAX = jobTitleUnit === "em" ? 10 : 100;

		const JOB_LINE_HEIGHT_STEP = jobTitleLineHeightUnit === "em" ? 0.1 : 1;
		const JOB_LINE_HEIGHT_MAX = jobTitleLineHeightUnit === "em" ? 10 : 100;

		const JOB_SPACING_STEP = jobTitleLetterSpacingUnit === "em" ? 0.1 : 1;
		const JOB_SPACING_MAX = jobTitleLetterSpacingUnit === "em" ? 10 : 100;

		const DETAILS_SIZE_STEP = jobDetailsUnit === "em" ? 0.1 : 1;
		const DETAILS_SIZE_MAX = jobDetailsUnit === "em" ? 10 : 100;

		const DETAILS_LINE_HEIGHT_STEP = detailsLineHeightUnit === "em" ? 0.1 : 1;
		const DETAILS_LINE_HEIGHT_MAX = detailsLineHeightUnit === "em" ? 10 : 100;

		const DETAILS_SPACING_STEP = detailsLetterSpacingUnit === "em" ? 0.1 : 1;
		const DETAILS_SPACING_MAX = detailsLetterSpacingUnit === "em" ? 10 : 100;

		return (
			<InspectorControls key="controls">
				{imageUrl && (
					<PanelBody title={__("Avatar")}>
						<ImageAvatar
							imageUrl={imageUrl}
							onDeleteImage={() => setAttributes({ imageUrl: null })}
						/>

						<SelectControl
							label={__("Image Size")}
							value={imageSize}
							options={IMAGE_SIZES}
							onChange={(newSize) => this.onSizeSelect(newSize)}
						/>

						{customSize && (
							<RangeControl
								label={__("Image Height")}
								value={imageHeight}
								onChange={(newSize) => setAttributes({ imageHeight: newSize })}
								min={0}
								max={610}
							/>
						)}

						{customSize && (
							<RangeControl
								label={__("Image Width")}
								value={imageWidth}
								onChange={(newSize) => setAttributes({ imageWidth: newSize })}
								min={0}
								max={610}
							/>
						)}

						<BaseControl
							id="eb-team-member-image-shape"
							label={__("Image Shape")}
						>
							<ButtonGroup id="eb-team-member-image-shape">
								{IMAGE_SHAPES.map((item) => (
									<Button
										isLarge
										isSecondary={borderRadius !== item.value}
										isPrimary={borderRadius === item.value}
										onClick={() =>
											setAttributes({
												borderRadius: item.value,
											})
										}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>

						<RangeControl
							label={__("Border Radius")}
							value={borderRadius}
							onChange={(newValue) => setAttributes({ borderRadius: newValue })}
							min={0}
							max={50}
						/>
					</PanelBody>
				)}

				<PanelColorSettings
					title={__("Colors")}
					initialOpen={false}
					colorSettings={[
						{
							value: nameColor || DEFAULT_NAME_COLOR,
							onChange: (newColor) => setAttributes({ nameColor: newColor }),
							label: __("Name Color"),
						},
						{
							value: jobTitleColor || DEFAULT_JOB_TITLE_COLOR,
							onChange: (newColor) =>
								setAttributes({ jobTitleColor: newColor }),
							label: __("Job Title Color"),
						},
						{
							value: jobDetailsColor || DEFAULT_JOB_DETAILS_COLOR,
							onChange: (newColor) =>
								setAttributes({ jobDetailsColor: newColor }),
							label: __("Job Details Color"),
						},
						{
							value: socialIconColor || DEFAULT_PROFILE_COLOR,
							onChange: (newColor) =>
								setAttributes({
									socialIconColor: newColor,
								}),
							label: __("Social Icon Color"),
						},
					]}
				/>

				<PanelBody title={__("Typography")} initialOpen={false}>
					<BaseControl label={__("Name")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={nameFontFamily}
										onChange={(nameFontFamily) =>
											setAttributes({ nameFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={nameUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(nameUnit) => setAttributes({ nameUnit })}
									/>

									<RangeControl
										label={__("Font Size")}
										value={nameFontSize}
										onChange={(nameFontSize) => setAttributes({ nameFontSize })}
										step={NAME_SIZE_STEP}
										min={0}
										max={NAME_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={nameFontWeight}
										options={FONT_WEIGHTS}
										onChange={(nameFontWeight) =>
											setAttributes({ nameFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={nameTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(nameTextTransform) =>
											setAttributes({ nameTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={nameTextDecoration}
										options={TEXT_DECORATION}
										onChange={(nameTextDecoration) =>
											setAttributes({ nameTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={nameLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(nameLetterSpacingUnit) =>
											setAttributes({ nameLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={nameLetterSpacing}
										onChange={(nameLetterSpacing) =>
											setAttributes({ nameLetterSpacing })
										}
										min={0}
										max={NAME_SPACING_MAX}
										step={NAME_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={nameLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(nameLineHeightUnit) =>
											setAttributes({ nameLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={nameLineHeight}
										onChange={(nameLineHeight) =>
											setAttributes({ nameLineHeight })
										}
										min={0}
										max={NAME_LINE_HEIGHT_MAX}
										step={NAME_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl label={__("Job Title")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={jobTitleFontFamily}
										onChange={(jobTitleFontFamily) =>
											setAttributes({ jobTitleFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={jobTitleUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(jobTitleUnit) => setAttributes({ jobTitleUnit })}
									/>

									<RangeControl
										label={__("Font Size")}
										value={jobTitleFontSize}
										onChange={(jobTitleFontSize) =>
											setAttributes({ jobTitleFontSize })
										}
										step={JOB_SIZE_STEP}
										min={0}
										max={JOB_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={jobTitleFontWeight}
										options={FONT_WEIGHTS}
										onChange={(jobTitleFontWeight) =>
											setAttributes({ jobTitleFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={jobTitleTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(jobTitleTextTransform) =>
											setAttributes({ jobTitleTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={jobTitleTextDecoration}
										options={TEXT_DECORATION}
										onChange={(jobTitleTextDecoration) =>
											setAttributes({ jobTitleTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={jobTitleLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(jobTitleLetterSpacingUnit) =>
											setAttributes({ jobTitleLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={jobTitleLetterSpacing}
										onChange={(jobTitleLetterSpacing) =>
											setAttributes({ jobTitleLetterSpacing })
										}
										min={0}
										max={JOB_SPACING_MAX}
										step={JOB_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={jobTitleLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(jobTitleLineHeightUnit) =>
											setAttributes({ jobTitleLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={jobTitleLineHeight}
										onChange={(jobTitleLineHeight) =>
											setAttributes({ jobTitleLineHeight })
										}
										min={0}
										max={JOB_LINE_HEIGHT_MAX}
										step={JOB_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl label={__("Job Details")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={detailsFontFamily}
										onChange={(detailsFontFamily) =>
											setAttributes({ detailsFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={jobDetailsUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(jobDetailsUnit) =>
											setAttributes({ jobDetailsUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={jobDetailsFontSize}
										onChange={(jobDetailsFontSize) =>
											setAttributes({ jobDetailsFontSize })
										}
										step={DETAILS_SIZE_STEP}
										min={0}
										max={DETAILS_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={detailsFontWeight}
										options={FONT_WEIGHTS}
										onChange={(detailsFontWeight) =>
											setAttributes({ detailsFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={detailsTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(detailsTextTransform) =>
											setAttributes({ detailsTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={detailsTextDecoration}
										options={TEXT_DECORATION}
										onChange={(detailsTextDecoration) =>
											setAttributes({ detailsTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={detailsLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(detailsLetterSpacingUnit) =>
											setAttributes({ detailsLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={detailsLetterSpacing}
										onChange={(detailsLetterSpacing) =>
											setAttributes({ detailsLetterSpacing })
										}
										min={0}
										max={DETAILS_SPACING_MAX}
										step={DETAILS_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={detailsLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(detailsLineHeightUnit) =>
											setAttributes({ detailsLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={detailsLineHeight}
										onChange={(detailsLineHeight) =>
											setAttributes({ detailsLineHeight })
										}
										min={0}
										max={DETAILS_LINE_HEIGHT_MAX}
										step={DETAILS_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Social Profiles")} initialOpen={false}>
					<DealSocialProfiles
						profiles={socialProfiles}
						onProfileAdd={(socialProfiles) => setAttributes({ socialProfiles })}
						iconList={IconList}
					/>

					{hasProfile && (
						<SelectControl
							label={__("Align")}
							value={socialIconAlign}
							options={ICON_ALIGN}
							onChange={(newAlign) =>
								setAttributes({ socialIconAlign: newAlign })
							}
						/>
					)}

					{hasProfile && (
						<Fragment>
							<UnitControl
								selectedUnit={iconSizeUnit}
								unitTypes={[
									{ label: "px", value: "px" },
									{ label: "em", value: "em" },
									{ label: "%", value: "%" },
								]}
								onClick={(iconSizeUnit) => setAttributes({ iconSizeUnit })}
							/>

							<RangeControl
								label={__("Size")}
								value={socialIconSize || DEFAULT_PROFILE_SIZE}
								allowReset
								onChange={(newSize) =>
									setAttributes({ socialIconSize: newSize })
								}
								min={8}
								max={100}
							/>
						</Fragment>
					)}

					{hasProfile && (
						<Fragment>
							<UnitControl
								selectedUnit={iconSpaceUnit}
								unitTypes={[
									{ label: "px", value: "px" },
									{ label: "em", value: "em" },
									{ label: "%", value: "%" },
								]}
								onClick={(iconSpaceUnit) => setAttributes({ iconSpaceUnit })}
							/>

							<RangeControl
								label={__("Spacing")}
								value={socialIconSpacing}
								allowReset
								onChange={(newSize) =>
									setAttributes({
										socialIconSpacing: newSize,
									})
								}
								min={8}
								max={100}
							/>
						</Fragment>
					)}
				</PanelBody>

				<PanelBody title={__("Border")} initialOpen={false}>
					<ColorControl
						label={__("Border Color")}
						color={borderColor}
						onChange={(borderColor) => setAttributes({ borderColor })}
					/>

					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						onChange={(borderStyle) => setAttributes({ borderStyle })}
						options={BORDER_STYLES}
					/>

					<RangeControl
						label={__("Border Width")}
						value={borderWidth}
						allowReset
						onChange={(borderWidth) => setAttributes({ borderWidth })}
						min={0}
						max={100}
					/>
				</PanelBody>

				<PanelBody title={__("Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={shadowHOffset}
						allowReset
						onChange={(shadowHOffset) => setAttributes({ shadowHOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={shadowVOffset}
						allowReset
						onChange={(shadowVOffset) => setAttributes({ shadowVOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Blur")}
						value={shadowBlur}
						allowReset
						onChange={(shadowBlur) => setAttributes({ shadowBlur })}
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Spread")}
						value={shadowSpread}
						allowReset
						onChange={(shadowSpread) => setAttributes({ shadowSpread })}
						min={0}
						max={20}
					/>
				</PanelBody>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={marginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(marginUnit) => setAttributes({ marginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={paddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(paddingUnit) => setAttributes({ paddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={paddingTop}
						right={paddingRight}
						bottom={paddingBottom}
						left={paddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector;
