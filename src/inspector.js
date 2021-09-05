/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const { useEffect, useState, useRef } = wp.element;
const { select } = wp.data;
const {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
	DateTimePicker,
	TabPanel,
} = wp.components;

/**
 * Internal dependencies
 */

import TypographyDropdown from "../util/typography-control-v2";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
import ImageAvatar from "../util/image-avatar/";
import ColorControl from "../util/color-control";
import ResetControl from "../util/reset-control";
import GradientColorControl from "../util/gradient-color-controller";
import BorderShadowControl from "../util/border-shadow-control";
import BackgroundControl from "../util/background-control";
import DealSocialProfiles from "../util/social-profiles-v2/DealSocialProfiles";
// import IconList from "../util/social-profiles-v2/IconList";
import IconList from "../util/faIcons";
import {
	// TypographyIcon,
	// UserIcon,
	LeftAlignIcon,
	RightAlignIcon,
	CenterAlignIcon,
} from "../util/icons";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import objAttributes from "./attributes";

import {
	typoPrefix_descs,
	typoPrefix_name,
	typoPrefix_job,
} from "./constants/typographyPrefixConstants";

import {
	wrapperWidth,
	imageWidth,
	imageHeight,
	rangeIconSize,
	rangeIconPadding,
	rangeIconDistance,
	rangeIconRowGap,
	imgTopBgHeight,
	cSepWPrefix,
	sSepWPrefix,
	cSepHPrefix,
	sSepHPrefix,
	sclDeviderPosRight,
	p9LGap,
} from "./constants/rangeNames";

import {
	tmbWrapMarginConst,
	tmbWrapPaddingConst,
	tmbDescsPaddingConst,
	tmbNamePaddingConst,
	tmbJobPaddingConst,
	iconsWrapPadding,
	iconsWrapMargin,
	imageMarginConst,
	imagePaddingConst,
	contentsPad,
	contentsMargin,
} from "./constants/dimensionsConstants";

import {
	WrpBgConst,
	imgTopBgPrefix,
	socialWrpBg,
} from "./constants/backgroundsConstants";

import {
	WrpBdShadowConst,
	prefixSocialBdShadow,
	prefixImgBd,
} from "./constants/borderShadowConstants";

import {
	sizeUnitTypes,
	IconsHzAligns,
	// CONTENTS_ALIGNMENTS
	STYLE_PRESETS,
	separatorTypes,
	ContentsVerticalAligns,
} from "./constants";

function Inspector({ attributes, setAttributes }) {
	const {
		resOption,
		blockId,
		blockRoot,
		blockMeta,

		//
		imageUrl,

		//
		imageId,

		//
		isImgHeightAuto,

		//
		isSocialEffects,

		//
		sclScale,

		//
		sclRotate,

		//
		sclEffTransition,

		//
		showDescs,

		//
		descsColor,
		jobColor,
		nameColor,

		// social profiles
		showSocials,
		socialDetails,

		//
		iconsJustify,
		iconsVAlign,

		//
		contentsAlign,
		imageAlign,
		cSepAlign,
		sSepAlign,

		//
		preset,
		imgBeforeEl,
		showCSeparator,
		showSSeparator,
		cSepType,
		sSepType,
		cSepColor,
		sSepColor,

		//
		isIconsDevider,
		icnsDevideColor,
		icnSepW,
		icnSepH,

		//
		hvIcnColor,
		hvIcnBgc,

		//
		conVtAlign,
		isConBgGradient,
		conBgGradient,
		conBgColor,

		//
		imgCnVtAlign,
		isP9reverse,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	const defaultPresetAttrsObj = {
		// test: undefined,
		socialInImage: false,
		WrpBg_backgroundColor: undefined,
		cSepColor: undefined,
		dscP_Left: undefined,
		dscP_Right: undefined,
		hov_imgBgP_gradientColor: undefined,
		icnSepH: 30,
		icnSp_Range: 20,
		icnWp_Bottom: undefined,
		icnWp_Left: undefined,
		icnWp_Right: undefined,
		icnWp_Top: undefined,
		icnWp_isLinked: true,
		imgBd_Bdr_Bottom: "1",
		imgBd_Bdr_Left: "1",
		imgBd_Bdr_Right: "1",
		imgBd_Bdr_Top: "1",
		imgBd_Rds_Bottom: undefined,
		imgBd_Rds_Left: undefined,
		imgBd_Rds_Right: undefined,
		imgBd_Rds_Top: undefined,
		imgBd_Rds_Unit: "px",
		imgBd_borderColor: "undefined",
		imgBd_borderStyle: "none",
		imgBeforeEl: false,
		imgBgP_gradientColor: "linear-gradient(45deg,#7967ff,#c277f2)",
		imgMrg_Top: undefined,
		imgMrg_isLinked: true,
		isIconsDevider: false,
		jobP_Bottom: undefined,
		jobP_isLinked: true,
		sSepColor: undefined,
		showCSeparator: false,
		showSSeparator: false,
		wrpBdSd_blur: undefined,
		wrpBdSd_hOffset: undefined,
		wrpBdSd_shadowColor: undefined,
		wrpBdSd_spread: undefined,
		wrpBdSd_vOffset: undefined,
		wrpMrg_isLinked: true,
		wrpPad_isLinked: true,
		imgH_Range: 200,
		imgW_Range: 200,
		nameP_Bottom: "15",
		nameP_Top: "20",
		showDescs: true,
		wrpBdSd_Rds_Unit: "px",
		imgW_Unit: "px",
		wrpBdSd_Rds_Bottom: undefined,
		wrpBdSd_Rds_Left: undefined,
		wrpBdSd_Rds_Right: undefined,
		wrpBdSd_Rds_Top: undefined,
		wrpMrg_Bottom: undefined,
		wrpW_Range: 100,
		wrpW_Unit: "%",
		hov_sclWBg_backgroundColor: undefined,
		icnWp_Bottom: undefined,
		icnWp_Left: undefined,
		icnWp_Right: undefined,
		icnWp_Top: undefined,
		sclWBg_backgroundColor: undefined,
		iconsVAlign: "center",
		isImgHeightAuto: false,
		conBgGradient: "linear-gradient(45deg, #7967ff, rgba(194,119,242,0.8))",
		imgW_Unit: "px",
	};

	const handlePresetChange = (preset) => {
		switch (preset) {
			case "default":
				setAttributes({
					...defaultPresetAttrsObj,
				});
				break;

			case "preset4":
				setAttributes({
					...defaultPresetAttrsObj,

					conBgGradient:
						"linear-gradient(45deg, #7967ff 0% , rgba(194,119,242,0.8) 100%)",
					imgW_Unit: "%",
					isImgHeightAuto: true,
				});
				break;

			case "preset3":
				setAttributes({
					...defaultPresetAttrsObj,
					socialInImage: true,

					hov_sclWBg_backgroundColor: "rgba(0,0,0,0.5)",
					icnWp_Bottom: "50",
					icnWp_Left: "50",
					icnWp_Right: "50",
					icnWp_Top: "50",
					iconsVAlign: "flex-end",
					imgW_Unit: "%",
					isImgHeightAuto: true,
					sclWBg_backgroundColor: "rgba(0,0,0,0.5)",
					socialInImage: true,
				});
				break;

			case "preset1":
				setAttributes({
					...defaultPresetAttrsObj,
					WrpBg_backgroundColor: "rgba(255,255,255,1)",
					cSepColor: "rgba(132,175,255,1)",
					dscP_Left: "20",
					dscP_Right: "20",
					hov_imgBgP_gradientColor:
						"linear-gradient(45deg, rgba(0,0,0,0.8) 0% , rgba(0,0,0,0.4) 100%)",
					icnSepH: 38,
					icnSp_Range: 50,
					icnWp_Bottom: "20",
					icnWp_Left: "40",
					icnWp_Right: "40",
					icnWp_Top: "20",
					icnWp_isLinked: false,
					imgBd_Bdr_Bottom: "5",
					imgBd_Bdr_Left: "5",
					imgBd_Bdr_Right: "5",
					imgBd_Bdr_Top: "5",
					imgBd_Rds_Bottom: "50",
					imgBd_Rds_Left: "50",
					imgBd_Rds_Right: "50",
					imgBd_Rds_Top: "50",
					imgBd_Rds_Unit: "%",
					imgBd_borderColor: "rgba(255,255,255,1)",
					imgBd_borderStyle: "solid",
					imgBeforeEl: true,
					imgBgP_gradientColor:
						"linear-gradient(45deg, rgba(120,102,255,0.49) 0% , rgba(195,120,242,0.52) 100%)",
					imgMrg_Top: "-100",
					imgMrg_isLinked: false,
					isIconsDevider: true,
					jobP_Bottom: "15",
					jobP_isLinked: false,
					sSepColor: "rgba(202,202,202,1)",
					showCSeparator: true,
					showSSeparator: true,
					wrpBdSd_blur: 20,
					wrpBdSd_hOffset: 0,
					wrpBdSd_shadowColor: "rgba(0,0,0,0.3)",
					wrpBdSd_spread: 0,
					wrpBdSd_vOffset: 5,
					wrpMrg_isLinked: false,
					wrpPad_isLinked: false,
				});
				break;

			case "preset2":
				setAttributes({
					...defaultPresetAttrsObj,

					icnWp_Bottom: "45",
					icnWp_isLinked: false,
					imgBd_Rds_Bottom: "50",
					imgBd_Rds_Left: "50",
					imgBd_Rds_Right: "50",
					imgBd_Rds_Top: "50",
					imgBd_Rds_Unit: "%",
					imgH_Range: 600,
					imgW_Range: 600,
					jobP_Bottom: "15",
					jobP_isLinked: false,
					nameP_Bottom: "10",
					nameP_Top: "10",
					showDescs: false,
					wrpBdSd_Rds_Bottom: "50",
					wrpBdSd_Rds_Left: "50",
					wrpBdSd_Rds_Right: "50",
					wrpBdSd_Rds_Top: "50",
					wrpBdSd_Rds_Unit: "%",
					wrpMrg_Bottom: "80",
					wrpMrg_isLinked: false,
					wrpW_Range: 600,
					wrpW_Unit: "px",
				});
				break;

			case "preset5":
				setAttributes({
					...defaultPresetAttrsObj,
				});
				break;

			case "preset6":
				setAttributes({
					...defaultPresetAttrsObj,
				});
				break;
		}

		setAttributes({ preset });
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody
										title={__("Presets")}
										// initialOpen={false}
									>
										<BaseControl label={__("Design Preset")}>
											<SelectControl
												// label={__("Design Preset")}
												value={preset}
												options={STYLE_PRESETS}
												// onChange={(preset) => setAttributes({ preset })}
												onChange={handlePresetChange}
											/>
										</BaseControl>

										{preset === "preset5" && (
											<>
												<ToggleControl
													label={__("Reverse Layout")}
													checked={isP9reverse}
													onChange={() =>
														setAttributes({
															isP9reverse: !isP9reverse,
														})
													}
												/>

												<ResponsiveRangeController
													// noUnits
													baseLabel={__("Gap")}
													controlName={p9LGap}
													resRequiredProps={resRequiredProps}
													min={0}
													max={100}
													step={1}
												/>
											</>
										)}
									</PanelBody>

									<PanelBody
										title={__("Avatar")}
										// initialOpen={false}
									>
										{!imageUrl && (
											<MediaUpload
												onSelect={({ id, url }) =>
													setAttributes({ imageUrl: url, imageId: id })
												}
												type="image"
												value={imageId}
												render={({ open }) => {
													return (
														<Button
															className="eb-background-control-inspector-panel-img-btn components-button"
															label={__("Upload Image")}
															icon="format-image"
															onClick={open}
														/>
													);
												}}
											/>
										)}

										{imageUrl && (
											<>
												<ImageAvatar
													imageUrl={imageUrl}
													onDeleteImage={() =>
														setAttributes({
															imageUrl: null,
														})
													}
												/>
											</>
										)}
									</PanelBody>

									<PanelBody
										title={__("Social Profiles")}
										// initialOpen={false}
									>
										<>
											<ToggleControl
												label={__("Enable Social Profiles")}
												checked={showSocials}
												onChange={() =>
													setAttributes({
														showSocials: !showSocials,
													})
												}
											/>
											{showSocials && (
												<DealSocialProfiles
													profiles={socialDetails}
													onProfileAdd={(socialDetails) =>
														setAttributes({ socialDetails })
													}
													iconList={IconList}
												/>
											)}
										</>
									</PanelBody>

									<PanelBody
										title={__("Separators")}
										// initialOpen={false}
									>
										<ToggleControl
											label={__("Enable Content Separator")}
											checked={showCSeparator}
											onChange={() =>
												setAttributes({
													showCSeparator: !showCSeparator,
												})
											}
										/>

										{showSocials && (
											<ToggleControl
												label={__("Enable Social Separator")}
												checked={showSSeparator}
												onChange={() =>
													setAttributes({
														showSSeparator: !showSSeparator,
													})
												}
											/>
										)}
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Container width")}
										// initialOpen={false}
									>
										<ResponsiveRangeController
											// noUnits
											baseLabel={__("Max Width")}
											controlName={wrapperWidth}
											resRequiredProps={resRequiredProps}
											min={100}
											max={2000}
											step={1}
										/>
									</PanelBody>

									{preset === "preset4" && (
										<PanelBody
											title={__("Overlay Contents")}
											// initialOpen={false}
										>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={contentsMargin}
												baseLabel="margin"
											/>

											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={contentsPad}
												baseLabel="Padding"
											/>

											<BaseControl
												id="eb-team-content-vertical-alignments"
												label="Vertical alignments"
											>
												<ButtonGroup id="eb-team-content-vertical-alignments">
													{ContentsVerticalAligns.map(({ value, label }) => (
														<Button
															isLarge
															isSecondary={conVtAlign !== value}
															isPrimary={conVtAlign === value}
															onClick={() =>
																setAttributes({ conVtAlign: value })
															}
														>
															{label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											<BaseControl label={__("Background")}></BaseControl>
											<ToggleControl
												label={__("Use Background Gradient")}
												checked={isConBgGradient}
												onChange={() =>
													setAttributes({
														isConBgGradient: !isConBgGradient,
													})
												}
											/>

											{isConBgGradient ? (
												<GradientColorControl
													gradientColor={conBgGradient}
													onChange={(conBgGradient) =>
														setAttributes({ conBgGradient })
													}
												/>
											) : (
												<ColorControl
													label={__("Color")}
													color={conBgColor}
													onChange={(conBgColor) =>
														setAttributes({ conBgColor })
													}
												/>
											)}
										</PanelBody>
									)}

									<PanelBody title={__("Alignments")}>
										{preset === "preset5" ? (
											<BaseControl
												id="eb-team-avatar-vertical-alignments"
												label="Avatar/Content Vertical Alignment"
											>
												<SelectControl
													// label={__("Icons Horizontal Alignment")}
													value={imgCnVtAlign}
													options={ContentsVerticalAligns}
													onChange={(imgCnVtAlign) =>
														setAttributes({ imgCnVtAlign })
													}
												/>
											</BaseControl>
										) : (
											<BaseControl
												id="eb-team-image-alignments"
												label="Avatar Horizontal Alignments"
											>
												<ButtonGroup className="eb-btngrp-align">
													<Button
														icon={() => (
															<LeftAlignIcon
																color={imageAlign === "left" && "#6c40f7"}
															/>
														)}
														onClick={() =>
															setAttributes({ imageAlign: "left" })
														}
													/>
													<Button
														icon={() => (
															<CenterAlignIcon
																color={imageAlign === "center" && "#6c40f7"}
															/>
														)}
														onClick={() =>
															setAttributes({ imageAlign: "center" })
														}
													/>
													<Button
														icon={() => (
															<RightAlignIcon
																color={imageAlign === "right" && "#6c40f7"}
															/>
														)}
														onClick={() =>
															setAttributes({ imageAlign: "right" })
														}
													/>
												</ButtonGroup>
											</BaseControl>
										)}

										<BaseControl
											id="eb-team-contents-alignments"
											label="Contents Horizontal Alignments"
										>
											<ButtonGroup className="eb-btngrp-align">
												<Button
													icon={() => (
														<LeftAlignIcon
															color={contentsAlign === "left" && "#6c40f7"}
														/>
													)}
													onClick={() =>
														setAttributes({ contentsAlign: "left" })
													}
												/>
												<Button
													icon={() => (
														<CenterAlignIcon
															color={contentsAlign === "center" && "#6c40f7"}
														/>
													)}
													onClick={() =>
														setAttributes({ contentsAlign: "center" })
													}
												/>
												<Button
													icon={() => (
														<RightAlignIcon
															color={contentsAlign === "right" && "#6c40f7"}
														/>
													)}
													onClick={() =>
														setAttributes({ contentsAlign: "right" })
													}
												/>
											</ButtonGroup>
										</BaseControl>

										{showSocials && (
											<>
												<BaseControl
													id="eb-team-icons-alignments"
													label="Social Icons Horizontal Alignments"
												>
													<SelectControl
														// label={__("Icons Horizontal Alignment")}
														value={iconsJustify}
														options={IconsHzAligns}
														onChange={(iconsJustify) =>
															setAttributes({ iconsJustify })
														}
													/>
												</BaseControl>

												{preset === "preset3" && (
													<BaseControl
														id="eb-team-icons-alignments"
														label="Social Icons Vertical Alignments"
													>
														<SelectControl
															// label={__("Icons Horizontal Alignment")}
															value={iconsVAlign}
															options={ContentsVerticalAligns}
															onChange={(iconsVAlign) =>
																setAttributes({ iconsVAlign })
															}
														/>
													</BaseControl>
												)}
											</>
										)}

										{showCSeparator && (
											<BaseControl
												id="eb-team-contents-alignments"
												label="Content Separator Alignment"
											>
												<ButtonGroup className="eb-btngrp-align">
													<Button
														icon={() => (
															<LeftAlignIcon
																color={cSepAlign === "left" && "#6c40f7"}
															/>
														)}
														onClick={() => setAttributes({ cSepAlign: "left" })}
													/>
													<Button
														icon={() => (
															<CenterAlignIcon
																color={cSepAlign === "center" && "#6c40f7"}
															/>
														)}
														onClick={() =>
															setAttributes({ cSepAlign: "center" })
														}
													/>
													<Button
														icon={() => (
															<RightAlignIcon
																color={cSepAlign === "right" && "#6c40f7"}
															/>
														)}
														onClick={() =>
															setAttributes({ cSepAlign: "right" })
														}
													/>
												</ButtonGroup>
											</BaseControl>
										)}

										{showSocials && showSSeparator && (
											<BaseControl
												id="eb-team-contents-alignments"
												label="Social Separator Alignment"
											>
												<ButtonGroup className="eb-btngrp-align">
													<Button
														icon={() => (
															<LeftAlignIcon
																color={sSepAlign === "left" && "#6c40f7"}
															/>
														)}
														onClick={() => setAttributes({ sSepAlign: "left" })}
													/>
													<Button
														icon={() => (
															<CenterAlignIcon
																color={sSepAlign === "center" && "#6c40f7"}
															/>
														)}
														onClick={() =>
															setAttributes({ sSepAlign: "center" })
														}
													/>
													<Button
														icon={() => (
															<RightAlignIcon
																color={sSepAlign === "right" && "#6c40f7"}
															/>
														)}
														onClick={() =>
															setAttributes({ sSepAlign: "right" })
														}
													/>
												</ButtonGroup>
											</BaseControl>
										)}
									</PanelBody>

									<PanelBody title={__("Avatar")} initialOpen={false}>
										{!imageUrl && (
											<MediaUpload
												onSelect={({ id, url }) =>
													setAttributes({ imageUrl: url, imageId: id })
												}
												type="image"
												value={imageId}
												render={({ open }) => {
													return (
														<Button
															className="eb-background-control-inspector-panel-img-btn components-button"
															label={__("Upload Image")}
															icon="format-image"
															onClick={open}
														/>
													);
												}}
											/>
										)}
										{imageUrl && (
											<>
												<ResponsiveRangeController
													baseLabel={__("Image Width")}
													controlName={imageWidth}
													resRequiredProps={resRequiredProps}
													units={sizeUnitTypes}
													max={2000}
												/>
												<ToggleControl
													label={__("Auto Image Height")}
													checked={isImgHeightAuto}
													onChange={() =>
														setAttributes({
															isImgHeightAuto: !isImgHeightAuto,
														})
													}
												/>

												{!isImgHeightAuto && (
													<ResponsiveRangeController
														baseLabel={__("Image Height", "infobox")}
														controlName={imageHeight}
														resRequiredProps={resRequiredProps}
														units={sizeUnitTypes}
														max={2000}
													/>
												)}

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={imageMarginConst}
													baseLabel="Margin"
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={imagePaddingConst}
													baseLabel="Padding"
												/>

												<BorderShadowControl
													controlName={prefixImgBd}
													resRequiredProps={resRequiredProps}
													// noShadow
													// noBorder
												/>

												<ToggleControl
													label={__("Enable Background before Image")}
													checked={imgBeforeEl}
													onChange={() =>
														setAttributes({
															imgBeforeEl: !imgBeforeEl,
														})
													}
												/>

												{imgBeforeEl && (
													<>
														<BackgroundControl
															noOverlay
															noMainBgi
															controlName={imgTopBgPrefix}
															resRequiredProps={resRequiredProps}
														/>

														<ResponsiveRangeController
															noUnits
															baseLabel={__("Height")}
															controlName={imgTopBgHeight}
															resRequiredProps={resRequiredProps}
															min={0}
															max={300}
															step={1}
														/>
													</>
												)}
											</>
										)}
									</PanelBody>

									<PanelBody title={__("Name")} initialOpen={false}>
										<ColorControl
											label={__("Color")}
											color={nameColor}
											onChange={(nameColor) => setAttributes({ nameColor })}
										/>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_name}
											resRequiredProps={resRequiredProps}
										/>

										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={tmbNamePaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Job Title")} initialOpen={false}>
										<ColorControl
											label={__("Color")}
											color={jobColor}
											onChange={(jobColor) => setAttributes({ jobColor })}
										/>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_job}
											resRequiredProps={resRequiredProps}
										/>

										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={tmbJobPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Description")} initialOpen={false}>
										<ToggleControl
											label={__("Enable Description")}
											checked={showDescs}
											onChange={() => setAttributes({ showDescs: !showDescs })}
										/>

										{showDescs && (
											<>
												<ColorControl
													label={__("Color")}
													color={descsColor}
													onChange={(descsColor) =>
														setAttributes({ descsColor })
													}
												/>

												<TypographyDropdown
													baseLabel="Typography"
													typographyPrefixConstant={typoPrefix_descs}
													resRequiredProps={resRequiredProps}
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={tmbDescsPaddingConst}
													baseLabel="Padding"
												/>
											</>
										)}
									</PanelBody>

									{showSocials && (
										<PanelBody title={__("Social Icons")} initialOpen={false}>
											<ColorControl
												label={__("Hover Color")}
												color={hvIcnColor}
												onChange={(hvIcnColor) => setAttributes({ hvIcnColor })}
											/>

											<ColorControl
												label={__("Hover Background")}
												color={hvIcnBgc}
												onChange={(hvIcnBgc) => setAttributes({ hvIcnBgc })}
											/>

											<ResponsiveRangeController
												noUnits
												baseLabel={__("Size")}
												controlName={rangeIconSize}
												resRequiredProps={resRequiredProps}
												min={5}
												max={300}
												step={1}
											/>

											<ResponsiveRangeController
												noUnits
												baseLabel={__("Padding")}
												controlName={rangeIconPadding}
												resRequiredProps={resRequiredProps}
												min={0}
												max={6}
												step={0.1}
											/>

											<ResponsiveRangeController
												noUnits
												baseLabel={__("Spacing")}
												controlName={rangeIconDistance}
												resRequiredProps={resRequiredProps}
												min={0}
												max={100}
												step={1}
											/>

											<ResponsiveRangeController
												noUnits
												baseLabel={__("Rows Gap")}
												controlName={rangeIconRowGap}
												resRequiredProps={resRequiredProps}
												min={0}
												max={100}
												step={1}
											/>

											<label
												style={{
													display: "block",
													margin: "-20px 0 20px",
												}}
											>
												<i>
													N.B. 'Rows Gap' is used when U have multiple rows of
													social profiles. Normally in case of only one row,
													it's not needed
												</i>
											</label>

											<ToggleControl
												label={__("Icons Devider")}
												checked={isIconsDevider}
												onChange={() =>
													setAttributes({
														isIconsDevider: !isIconsDevider,
													})
												}
											/>

											{isIconsDevider && (
												<>
													<ColorControl
														label={__("Color")}
														color={icnsDevideColor}
														onChange={(icnsDevideColor) =>
															setAttributes({ icnsDevideColor })
														}
													/>

													<RangeControl
														label={__("Width")}
														value={icnSepW}
														onChange={(icnSepW) => setAttributes({ icnSepW })}
														step={1}
														min={1}
														max={50}
													/>

													<RangeControl
														label={__("Height")}
														value={icnSepH}
														onChange={(icnSepH) => setAttributes({ icnSepH })}
														step={1}
														min={1}
														max={50}
													/>

													<ResponsiveRangeController
														baseLabel={__("Position From Right")}
														controlName={sclDeviderPosRight}
														resRequiredProps={resRequiredProps}
														min={0}
														max={80}
														step={1}
													/>
												</>
											)}

											<PanelBody title={__("Icons Border")} initialOpen={false}>
												<BorderShadowControl
													controlName={prefixSocialBdShadow}
													resRequiredProps={resRequiredProps}
													noShadow
													// noBorder
												/>
											</PanelBody>

											<PanelBody
												title={__("Container Background ")}
												initialOpen={false}
											>
												<BackgroundControl
													controlName={socialWrpBg}
													resRequiredProps={resRequiredProps}
													noMainBgi
													noOverlay
												/>
											</PanelBody>
											<PanelBody
												title={__("Container Margin Padding ")}
												initialOpen={false}
											>
												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={iconsWrapMargin}
													baseLabel="Margin"
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={iconsWrapPadding}
													baseLabel="Padding"
												/>
											</PanelBody>

											<br />

											<ToggleControl
												label={__("More Hover Effects")}
												checked={isSocialEffects}
												onChange={() =>
													setAttributes({
														isSocialEffects: !isSocialEffects,
													})
												}
											/>

											{isSocialEffects && (
												<>
													<RangeControl
														label={__("Scale [1 for no scale effect]")}
														value={sclScale}
														onChange={(sclScale) => setAttributes({ sclScale })}
														step={0.1}
														min={0}
														max={3}
													/>

													<RangeControl
														label={__(
															"Rotate (in deg) [0 for no rotate effect]"
														)}
														value={sclRotate}
														onChange={(sclRotate) =>
															setAttributes({ sclRotate })
														}
														step={1}
														min={-360}
														max={360}
													/>

													<RangeControl
														label={__(
															"Effect Transition [0 for no transition effect]"
														)}
														value={sclEffTransition}
														onChange={(sclEffTransition) =>
															setAttributes({ sclEffTransition })
														}
														step={0.1}
														min={0}
														max={5}
													/>
												</>
											)}
										</PanelBody>
									)}

									{showCSeparator && (
										<PanelBody
											title={__("Content Separator")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Color")}
												color={cSepColor}
												onChange={(cSepColor) => setAttributes({ cSepColor })}
											/>

											<ResponsiveRangeController
												baseLabel={__("Width")}
												controlName={cSepWPrefix}
												resRequiredProps={resRequiredProps}
												min={0}
												max={800}
												step={1}
											/>

											<ResponsiveRangeController
												baseLabel={__("Height")}
												controlName={cSepHPrefix}
												resRequiredProps={resRequiredProps}
												min={0}
												max={20}
												step={1}
											/>

											<BaseControl label={__("Separator Type")}>
												<SelectControl
													// label={__("Design Preset")}
													value={cSepType}
													options={separatorTypes}
													// onChange={(preset) => setAttributes({ preset })}
													onChange={(cSepType) => {
														setAttributes({ cSepType });
													}}
												/>
											</BaseControl>
										</PanelBody>
									)}
									{showSocials && showSSeparator && (
										<PanelBody
											title={__("Social Separator")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Color")}
												color={sSepColor}
												onChange={(sSepColor) => setAttributes({ sSepColor })}
											/>

											<ResponsiveRangeController
												baseLabel={__("Width")}
												controlName={sSepWPrefix}
												resRequiredProps={resRequiredProps}
												min={0}
												max={800}
												step={1}
											/>

											<ResponsiveRangeController
												baseLabel={__("Height")}
												controlName={sSepHPrefix}
												resRequiredProps={resRequiredProps}
												min={0}
												max={20}
												step={1}
											/>

											<BaseControl label={__("Separator Type")}>
												<SelectControl
													// label={__("Design Preset")}
													value={sSepType}
													options={separatorTypes}
													// onChange={(preset) => setAttributes({ preset })}
													onChange={(sSepType) => {
														setAttributes({ sSepType });
													}}
												/>
											</BaseControl>
										</PanelBody>
									)}
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody
										title={__("Margin & Padding")}
										// initialOpen={true}
									>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={tmbWrapMarginConst}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={tmbWrapPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Background ")} initialOpen={false}>
										<BackgroundControl
											controlName={WrpBgConst}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WrpBdShadowConst}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}
export default Inspector;
