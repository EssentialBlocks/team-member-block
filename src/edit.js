/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, MediaUpload, RichText } = wp.blockEditor;
const { Button } = wp.components;
const { useEffect, useRef } = wp.element;

const { select } = wp.data;

/**
 * Internal dependencies
 */

import "./editor.scss";

import {
	softMinifyCssStrings,
	isCssExists,
	generateBackgroundControlStyles,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

import Inspector from "./inspector";
import SocialLinks from "./components/social-links";

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

export default function Edit({
	attributes,
	setAttributes,
	isSelected,
	clientId,
}) {
	const {
		resOption,
		blockId,
		blockMeta,

		// member name
		name,

		// job title
		jobTitle,

		// member description
		description,

		//
		showDescs,

		//
		imageUrl,
		imageId,

		//
		isImgHeightAuto,

		//
		descsColor = "#9f9f9f",
		jobColor = "#4b4b4b",
		nameColor = "#4b4b4b",

		// social profiles
		showSocials,
		socialDetails,
		profilesOnly,

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
		socialInImage,

		//
		imgBeforeEl,

		//
		showCSeparator,
		showSSeparator,
		cSepType = "solid",
		sSepType = "solid",
		cSepColor = "#84AFFF",
		sSepColor = "#CACACA",

		//
		isIconsDevider,
		icnsDevideColor = "#cacaca",
		icnSepW = 1,
		icnSepH = 30,

		//
		hvIcnColor,
		hvIcnBgc,

		//
		conVtAlign,
		isConBgGradient,
		conBgGradient,
		conBgColor = "rgba(0,0,0,.4)",

		//
		imgCnVtAlign,
		isP9reverse,
	} = attributes;

	//
	useEffect(() => {
		const newProfiles = socialDetails.map((profile) => ({
			...profile,
			isExpanded: false,
		}));

		setAttributes({ socialDetails: newProfiles });
	}, []);

	//
	useEffect(() => {
		const profilesOnly = socialDetails.map(({ icon, link }) => ({
			icon,
			link,
		}));

		setAttributes({ profilesOnly });
	}, [socialDetails]);

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		const BLOCK_PREFIX = "eb-team-member";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// styling codes start from here
	//

	// styles related to generateTypographyStyles start ⬇

	const {
		typoStylesDesktop: nameTypoStylesDesktop,
		typoStylesTab: nameTypoStylesTab,
		typoStylesMobile: nameTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_name,
		defaultFontSize: 20,
	});

	const {
		typoStylesDesktop: jobTypoStylesDesktop,
		typoStylesTab: jobTypoStylesTab,
		typoStylesMobile: jobTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_job,
		defaultFontSize: 16,
	});

	const {
		typoStylesDesktop: descsTypoStylesDesktop,
		typoStylesTab: descsTypoStylesTab,
		typoStylesMobile: descsTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_descs,
		defaultFontSize: 16,
	});

	// styles related to generateTypographyStyles end ⬇

	// styles related to generateResponsiveRangeStyles start ⬇
	const {
		rangeStylesDesktop: wrapWidthDesktop,
		rangeStylesTab: wrapWidthTab,
		rangeStylesMobile: wrapWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: wrapperWidth,
		// customUnit: "px",
		property: "max-width",
		attributes,
	});

	const {
		rangeStylesDesktop: imgWidthDesktop,
		rangeStylesTab: imgWidthTab,
		rangeStylesMobile: imgWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: imageWidth,
		// customUnit: "px",
		property: "width",
		attributes,
	});

	const {
		rangeStylesDesktop: p9flexGapDesktop,
		rangeStylesTab: p9flexGapTab,
		rangeStylesMobile: p9flexGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: p9LGap,
		// customUnit: "px",
		property: "Gap",
		attributes,
	});

	const {
		rangeStylesDesktop: imgHeightDesktop,
		rangeStylesTab: imgHeightTab,
		rangeStylesMobile: imgHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: imageHeight,
		// customUnit: "px",
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: iconSizeDesktop,
		rangeStylesTab: iconSizeTab,
		rangeStylesMobile: iconSizeMobile,
	} = generateResponsiveRangeStyles({
		controlName: rangeIconSize,
		customUnit: "px",
		property: "font-size",
		attributes,
	});

	const {
		rangeStylesDesktop: iconPaddingDesktop,
		rangeStylesTab: iconPaddingTab,
		rangeStylesMobile: iconPaddingMobile,
	} = generateResponsiveRangeStyles({
		controlName: rangeIconPadding,
		customUnit: "em",
		property: "padding",
		attributes,
	});

	const {
		rangeStylesDesktop: iconSpaceDesktop,
		rangeStylesTab: iconSpaceTab,
		rangeStylesMobile: iconSpaceMobile,
	} = generateResponsiveRangeStyles({
		controlName: rangeIconDistance,
		customUnit: "px",
		property: "column-gap",
		attributes,
	});

	const {
		rangeStylesDesktop: iconRowGapDesktop,
		rangeStylesTab: iconRowGapTab,
		rangeStylesMobile: iconRowGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: rangeIconRowGap,
		customUnit: "px",
		property: "row-gap",
		attributes,
	});

	const {
		rangeStylesDesktop: imgTopBgHeightDesktop,
		rangeStylesTab: imgTopBgHeightTab,
		rangeStylesMobile: imgTopBgHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: imgTopBgHeight,
		customUnit: "px",
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: contentSepWidthDesktop,
		rangeStylesTab: contentSepWidthTab,
		rangeStylesMobile: contentSepWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: cSepWPrefix,
		property: "width",
		attributes,
	});

	const {
		rangeStylesDesktop: socialSepWidthDesktop,
		rangeStylesTab: socialSepWidthTab,
		rangeStylesMobile: socialSepWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: sSepWPrefix,
		property: "width",
		attributes,
	});

	const {
		rangeStylesDesktop: contentSepHeightDesktop,
		rangeStylesTab: contentSepHeightTab,
		rangeStylesMobile: contentSepHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: cSepHPrefix,
		property: "border-bottom-width",
		attributes,
	});

	const {
		rangeStylesDesktop: socialSepHeightDesktop,
		rangeStylesTab: socialSepHeightTab,
		rangeStylesMobile: socialSepHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: sSepHPrefix,
		property: "border-bottom-width",
		attributes,
	});

	const {
		rangeStylesDesktop: sSepPosRightDesktop,
		rangeStylesTab: sSepPosRightTab,
		rangeStylesMobile: sSepPosRightMobile,
	} = generateResponsiveRangeStyles({
		controlName: sclDeviderPosRight,
		property: "margin-right",
		attributes,
	});

	// styles related to generateResponsiveRangeStyles end

	// styles related to generateBackgroundControlStyles start ⬇

	const {
		backgroundStylesDesktop: wrpBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrpBackgroundStylesTab,
		hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
		backgroundStylesMobile: wrpBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
		overlayStylesDesktop: wrpOverlayStylesDesktop,
		hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
		overlayStylesTab: wrpOverlayStylesTab,
		hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
		overlayStylesMobile: wrpOverlayStylesMobile,
		hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
		bgTransitionStyle: wrpBgTransitionStyle,
		ovlTransitionStyle: wrpOvlTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WrpBgConst,
		// noOverlay: true,
		// noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	const {
		backgroundStylesDesktop: imgTopBackgroundStyles,
		hoverBackgroundStylesDesktop: imgTopHoverBackgroundStyles,
		bgTransitionStyle: imgTopBgTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: imgTopBgPrefix,
		noOverlay: true,
		noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	const {
		backgroundStylesDesktop: socialWrapBackgroundStyles,
		hoverBackgroundStylesDesktop: socialWrapHoverBackgroundStyles,
		bgTransitionStyle: socialWrapTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: socialWrpBg,
		noOverlay: true,
		noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	// styles related to generateBackgroundControlStyles end

	// styles related to generateDimensionsControlStyles start ⬇
	const {
		dimensionStylesDesktop: wrpMarginDesktop,
		dimensionStylesTab: wrpMarginTab,
		dimensionStylesMobile: wrpMarginMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: tmbWrapMarginConst,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: wrpPaddingDesktop,
		dimensionStylesTab: wrpPaddingTab,
		dimensionStylesMobile: wrpPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: tmbWrapPaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: descsPaddingDesktop,
		dimensionStylesTab: descsPaddingTab,
		dimensionStylesMobile: descsPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: tmbDescsPaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: namePaddingDesktop,
		dimensionStylesTab: namePaddingTab,
		dimensionStylesMobile: namePaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: tmbNamePaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: jobPaddingDesktop,
		dimensionStylesTab: jobPaddingTab,
		dimensionStylesMobile: jobPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: tmbJobPaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: iconsWrapPaddingDesktop,
		dimensionStylesTab: iconsWrapPaddingTab,
		dimensionStylesMobile: iconsWrapPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: iconsWrapPadding,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: iconsWrapMarginDesktop,
		dimensionStylesTab: iconsWrapMarginTab,
		dimensionStylesMobile: iconsWrapMarginMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: iconsWrapMargin,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: imageMarginDesktop,
		dimensionStylesTab: imageMarginTab,
		dimensionStylesMobile: imageMarginMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: imageMarginConst,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: imagePaddingDesktop,
		dimensionStylesTab: imagePaddingTab,
		dimensionStylesMobile: imagePaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: imagePaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: contentsPaddingDesktop,
		dimensionStylesTab: contentsPaddingTab,
		dimensionStylesMobile: contentsPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: contentsPad,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: contentsMarginDesktop,
		dimensionStylesTab: contentsMarginTab,
		dimensionStylesMobile: contentsMarginMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: contentsMargin,
		styleFor: "margin",
	});

	// styles related to generateDimensionsControlStyles end

	// styles related to generateBorderShadowStyles start ⬇
	const {
		styesDesktop: wrpBdShdStyesDesktop,
		styesTab: wrpBdShdStyesTab,
		styesMobile: wrpBdShdStyesMobile,
		stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
		stylesHoverTab: wrpBdShdStylesHoverTab,
		stylesHoverMobile: wrpBdShdStylesHoverMobile,
		transitionStyle: wrpBdShdTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: WrpBdShadowConst,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	const {
		styesDesktop: socialBorderDesktop,
		styesTab: socialBorderTab,
		styesMobile: socialBorderMobile,
		stylesHoverDesktop: socialBordersHoverDesktop,
		stylesHoverTab: socialBordersHoverTab,
		stylesHoverMobile: socialBordersHoverMobile,
		transitionStyle: socialBorderTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: prefixSocialBdShadow,
		attributes,
		noShadow: true,
		// noBorder: true,
	});

	const {
		styesDesktop: imageBdShdStyleDesktop,
		styesTab: imageBdShdStyleTab,
		styesMobile: imageBdShdStyleMobile,
		stylesHoverDesktop: imageBdShdStylesHoverDesktop,
		stylesHoverTab: imageBdShdStylesHoverTab,
		stylesHoverMobile: imageBdShdStylesHoverMobile,
		transitionStyle: imageBdShdTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: prefixImgBd,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	// styles related to generateBorderShadowStyles end

	console.log("----edit theke", { attributes });

	const socialStyles = socialDetails.reduce(
		(acc, curr, i) => `
		${acc}
		.${blockId}.eb-team-wrapper ul.socials li:nth-child(${i + 1}) a {			
			background-color: ${curr.bgColor || "#000"};
			color: ${curr.color || "#fff"};
		}
		`,
		""
	);

	const wrapperStylesDesktop = `
		div.eb-team-wrapper h3,
		div.eb-team-wrapper h4,
		div.eb-team-wrapper p,
		div.eb-team-wrapper ul {
			margin: 0;
			padding:0;
		}

		.${blockId}.eb-team-wrapper {
			position:relative;
			margin:auto;
			${wrapWidthDesktop}
			${wrpBackgroundStylesDesktop}
			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBdShdStyesDesktop}
			transition: ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}


		${
			preset === "preset3"
				? `
				.${blockId}.eb-team-wrapper .image{
					position: relative;
				}

				.${blockId}.eb-team-wrapper:hover ul.socials {
					opacity: 1;
				}
				
				`
				: ""
		}

		${
			preset === "preset4"
				? `
				.${blockId}.eb-team-wrapper .eb-team-inner {
					position: relative;
				}

				.${blockId}.eb-team-wrapper:hover .contents {
					opacity: 1;
					z-index: 1;
				}

				.${blockId}.eb-team-wrapper .contents {
					transition: 0.5s;
					opacity: 0;
					z-index: -1;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					display: flex;
					flex-direction: column;
					justify-content: ${conVtAlign || "center"};
					${contentsPaddingDesktop}
					${contentsMarginDesktop}
					${
						isConBgGradient
							? `background-image: ${conBgGradient};`
							: `background-color: ${conBgColor};`
					}
				}

				`
				: ""
		}

		${
			preset === "preset2"
				? `
				.${blockId}.eb-team-wrapper:hover .contents{
					background-color: rgba(255, 255, 255, 0.5);
					top: 50%;
					height: 50%;
					display: flex;
					flex-direction: column;
					justify-content: center;		
				}

				.${blockId}.eb-team-wrapper:hover .contents .job_title {
					display: block;
				}
				
				.${blockId}.eb-team-wrapper:hover .contents ul.socials {
					display: flex;
				}
			
				`
				: ""
		}

		
		${
			preset === "preset5"
				? `
				.${blockId}.eb-team-wrapper .eb-team-inner {
					display: flex;
					justify-content: space-between;
					flex-direction: ${isP9reverse ? "row-reverse" : "row"};
					align-items: ${imgCnVtAlign || "flex-start"};
					${p9flexGapDesktop}
				}
				
				.${blockId}.eb-team-wrapper .image {
					${imgWidthDesktop}
				}

				.${blockId}.eb-team-wrapper .contents {
					flex:1;
				}
				`
				: ""
		}
		
  

		.${blockId}.eb-team-wrapper:hover{
			${preset === "preset2" ? `overflow:hidden;` : ""}

			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
		}
		
		.${blockId}.eb-team-wrapper:before{
			${wrpOverlayStylesDesktop}
			transition: ${wrpOvlTransitionStyle};

		}
		
		.${blockId}.eb-team-wrapper:hover:before{
			${wrpHoverOverlayStylesDesktop}

		}
		
		.${blockId}.eb-team-wrapper .image > img {
			max-width: 100%;
			object-fit: cover;
			display:block;
			margin:auto;
			${
				imageAlign === "left"
					? "margin-left:0;"
					: imageAlign === "right"
					? "margin-right:0;"
					: ""
			}
			${preset === "preset5" ? "width:100%;" : imgWidthDesktop}
			${imageBdShdStyleDesktop}
			${imageMarginDesktop}
			${imagePaddingDesktop}
			${isImgHeightAuto ? `height:auto;` : imgHeightDesktop}
			${
				preset === "preset6"
					? `clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);`
					: ""
			}
		}


	${
		imgBeforeEl
			? `
		.${blockId}.eb-team-wrapper .image:before {
			content: "";
			display: block;
			${imgTopBgHeightDesktop}
			${imgTopBackgroundStyles}
			transition: ${imgTopBgTransitionStyle};
			
		}

		.${blockId}.eb-team-wrapper .image:hover:before{
			${imgTopHoverBackgroundStyles}
		}
		`
			: ""
	}
		


		.${blockId}.eb-team-wrapper .image:hover > img {
			${imageBdShdStylesHoverDesktop}
			transition: ${imageBdShdTransitionStyle};
		}
		
		.${blockId}.eb-team-wrapper .contents {
			text-align: ${contentsAlign};
			box-sizing: border-box;
			${
				preset === "preset2"
					? `
					position: absolute;
					left: 0;
					right: 0;
					top: 100%;
					transition: 0.5s;
					`
					: ""
			}
		}
		
		.${blockId}.eb-team-wrapper .contents .name {
			${nameTypoStylesDesktop}
			${namePaddingDesktop}
			color: ${nameColor};
		}
		
		.${blockId}.eb-team-wrapper .contents .job_title {
			${jobTypoStylesDesktop}
			${jobPaddingDesktop}
			color: ${jobColor};
			${preset === "preset2" ? `display:none;` : ""}
		}
		
		${
			showDescs
				? `
				.${blockId}.eb-team-wrapper .contents .description {
					color: ${descsColor};
					${descsPaddingDesktop}
					${descsTypoStylesDesktop}
				}
				`
				: ""
		}		
		
${
	showCSeparator
		? `
		.${blockId}.eb-team-wrapper .contents .content_separator {
			border: none;
			margin: auto;
			border-bottom: 1px ${cSepType} ${cSepColor};
			${contentSepWidthDesktop}
			${contentSepHeightDesktop}
			${
				cSepAlign === "left"
					? "margin-left:0;"
					: cSepAlign === "right"
					? "margin-right:0;"
					: ""
			}
		}
		`
		: ""
}

${
	showSocials && showSSeparator
		? `
		.${blockId}.eb-team-wrapper .social_separator {
			border: none;
			margin: auto;
			border-bottom: 1px ${sSepType} ${sSepColor};
			${socialSepWidthDesktop}
			${socialSepHeightDesktop}
			${
				sSepAlign === "left"
					? "margin-left:0;"
					: sSepAlign === "right"
					? "margin-right:0;"
					: ""
			}
		}
		`
		: ""
}
		
		
${
	showSocials
		? `
		${socialStyles}
		
		.${blockId}.eb-team-wrapper ul.socials {
			list-style: none;
			flex-wrap: wrap;
			align-items: ${iconsVAlign || "center"};
			${iconsWrapMarginDesktop}
			${iconsWrapPaddingDesktop}
			justify-content: ${iconsJustify};
			${iconSpaceDesktop}
			${iconRowGapDesktop}
			${socialWrapBackgroundStyles}
			transition: ${socialWrapTransitionStyle}, opacity .5s;
			${preset === "preset2" ? `display:none;` : "display: flex;"}
			${
				preset === "preset3"
					? `
				opacity:0;
				position: absolute;
				top: 0;
				bottom: 0;
				width:100%;
				box-sizing:border-box;
			`
					: ""
			}
		}

		.${blockId}.eb-team-wrapper ul.socials:hover {
			${socialWrapHoverBackgroundStyles}
		}

	${
		isIconsDevider
			? `
		.${blockId}.eb-team-wrapper ul.socials li{
			position:relative;
		}

		.${blockId}.eb-team-wrapper ul.socials li + li:before {
			content: "";
			background-color: ${icnsDevideColor};
			height: ${icnSepH}px;
			width: ${icnSepW}px;
			position: absolute;
			top: 2px;
			right: 100%;
			${sSepPosRightDesktop}
		}
		`
			: ""
	}

		.${blockId}.eb-team-wrapper ul.socials li a {			
			box-sizing:content-box;
			text-decoration: none;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 0;
			width: 0;
			${iconSizeDesktop}
			${iconPaddingDesktop}
			${socialBorderDesktop}
			transition: color 0.5s, background-color 0.5s, ${socialBorderTransitionStyle};
		}
		
		.${blockId}.eb-team-wrapper ul.socials li:hover a {	
			background-color:${hvIcnColor};
			color:${hvIcnBgc};
			${socialBordersHoverDesktop}
		}
		
		`
		: ""
}
	
  

	`;

	const wrapperStylesTab = `
	.${blockId}.eb-team-wrapper {
		${wrapWidthTab}
		${wrpBackgroundStylesTab}
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBdShdStyesTab}
	}
	
	.${blockId}.eb-team-wrapper:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}
		
	}
	
	.${blockId}.eb-team-wrapper:before{
		${wrpOverlayStylesTab}

	}
	
	.${blockId}.eb-team-wrapper:hover:before{
		${wrpHoverOverlayStylesTab}

	}

	
	${
		preset === "preset5"
			? `			
			.${blockId}.eb-team-wrapper .image {
				${imgWidthTab}
			}

			.${blockId}.eb-team-wrapper .eb-team-inner {
				${p9flexGapTab}
			}
			
			`
			: ""
	}

	.${blockId}.eb-team-wrapper .image > img {
		${imageBdShdStyleTab}
		${imageMarginTab}
		${imagePaddingTab}
		${preset === "preset5" ? "" : imgWidthTab}		
		${isImgHeightAuto ? "" : imgHeightTab}
	}


	.${blockId}.eb-team-wrapper .image:hover > img {
		${imageBdShdStylesHoverTab}

	}


	${
		showDescs
			? `
			.${blockId}.eb-team-wrapper .contents .description {
				${descsTypoStylesTab}
				${descsPaddingTab}
			}		
			`
			: ""
	}	

	${
		preset === "preset4"
			? `
			.${blockId}.eb-team-wrapper .contents {
				${contentsPaddingTab}
				${contentsMarginTab}
			}
			`
			: ""
	}

	.${blockId}.eb-team-wrapper .contents .name {
		${nameTypoStylesTab}
		${namePaddingTab}
	}
	
	.${blockId}.eb-team-wrapper .contents .job_title {
		${jobTypoStylesTab}
		${jobPaddingTab}
	}	


		
${
	showCSeparator
		? `
		.${blockId}.eb-team-wrapper .contents .content_separator {
			${contentSepWidthTab}
			${contentSepHeightTab}
		}
		`
		: ""
}

${
	showSocials && showSSeparator
		? `
		.${blockId}.eb-team-wrapper .social_separator {
			${socialSepWidthTab}
			${socialSepHeightTab}
		}
		`
		: ""
}
	

${
	showSocials
		? `
		${socialStyles}
		
		.${blockId}.eb-team-wrapper ul.socials {
			${iconsWrapMarginTab}
			${iconsWrapPaddingTab}
			${iconSpaceTab}
			${iconRowGapTab}
		}	


	${
		isIconsDevider
			? `
			.${blockId}.eb-team-wrapper ul.socials li + li:before {
				${sSepPosRightTab}
			}
			`
			: ""
	}

		.${blockId}.eb-team-wrapper ul.socials li a {
			${iconSizeTab}
			${iconPaddingTab}
			${socialBorderTab}
		}
		
		.${blockId}.eb-team-wrapper ul.socials li:hover a {	
			${socialBordersHoverTab}
		}
		`
		: ""
}

	
	`;

	const wrapperStylesMobile = `
	.${blockId}.eb-team-wrapper {
		${wrapWidthMobile}
		${wrpBackgroundStylesMobile}
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBdShdStyesMobile}
	}
	
	.${blockId}.eb-team-wrapper:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}
		
	}
	
	.${blockId}.eb-team-wrapper:before{
		${wrpOverlayStylesMobile}

	}
	
	.${blockId}.eb-team-wrapper:hover:before{
		${wrpHoverOverlayStylesMobile}

	}

	${
		preset === "preset5"
			? `			
			.${blockId}.eb-team-wrapper .image {
				${imgWidthMobile}
			}

			.${blockId}.eb-team-wrapper .eb-team-inner {
				${p9flexGapMobile}
			}
			`
			: ""
	}

	.${blockId}.eb-team-wrapper .image > img {
		${preset === "preset5" ? "" : imgWidthMobile}
		${imageBdShdStyleMobile}
		${imageMarginMobile}
		${imagePaddingMobile}

		${isImgHeightAuto ? "" : imgHeightMobile}
	}


	

	.${blockId}.eb-team-wrapper .image:hover > img {
		${imageBdShdStylesHoverMobile}
	}


	${
		preset === "preset4"
			? `
			.${blockId}.eb-team-wrapper .contents {
				${contentsPaddingMobile}
				${contentsMarginMobile}
			}
			`
			: ""
	}
	
	${
		showDescs
			? `
			.${blockId}.eb-team-wrapper .contents .description {
				${descsTypoStylesMobile}
				${descsPaddingMobile}
			}	
			`
			: ""
	}
	
	.${blockId}.eb-team-wrapper .contents .name {
		${nameTypoStylesMobile}
		${namePaddingMobile}
	}
	
	.${blockId}.eb-team-wrapper .contents .job_title {
		${jobTypoStylesMobile}
		${jobPaddingMobile}
	}


		
${
	showCSeparator
		? `
		.${blockId}.eb-team-wrapper .contents .content_separator {
			${contentSepWidthMobile}
			${contentSepHeightMobile}
		}
		`
		: ""
}

${
	showSocials && showSSeparator
		? `
		.${blockId}.eb-team-wrapper .social_separator {
			${socialSepWidthMobile}
			${socialSepHeightMobile}
		}
		`
		: ""
}

${
	showSocials
		? `
		${socialStyles}

		.${blockId}.eb-team-wrapper ul.socials {
			${iconSpaceMobile}
			${iconRowGapMobile}
			${iconsWrapPaddingMobile}
			${iconsWrapMarginMobile}
		}


	${
		isIconsDevider
			? `
			.${blockId}.eb-team-wrapper ul.socials li + li:before {
				${sSepPosRightMobile}
			}
			`
			: ""
	}
			
		.${blockId}.eb-team-wrapper ul.socials li a {
			${iconSizeMobile}
			${iconPaddingMobile}
			${socialBorderMobile}
		}

		
		.${blockId}.eb-team-wrapper ul.socials li:hover a {	
			${socialBordersHoverMobile}
		}
		
		`
		: ""
}


	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`		
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}


	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}


	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}


	`);

	//
	// styling codes End here
	//

	console.log("-----edit theke:", { attributes });

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		// Edit view
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>

			<div className={`${blockId} eb-team-wrapper`}>
				<div className="eb-team-inner">
					<div className="image">
						<MediaUpload
							onSelect={({ id, url }) =>
								setAttributes({ imageUrl: url, imageId: id })
							}
							type="image"
							value={imageId}
							render={({ open }) => {
								if (!imageUrl) {
									return (
										<Button
											className="eb-infobox-img-btn components-button"
											label={__("Upload Image")}
											icon="format-image"
											onClick={open}
										/>
									);
								} else {
									return <img className="avatar" alt="member" src={imageUrl} />;
								}
							}}
						/>
						{socialInImage && showSocials && (
							<SocialLinks socialDetails={profilesOnly} />
						)}
					</div>
					<div className="contents">
						<div className="texts">
							<RichText
								tagName="h3"
								className="name"
								value={name}
								onChange={(name) => setAttributes({ name })}
							/>
							<RichText
								tagName="h4"
								className="job_title"
								value={jobTitle}
								onChange={(jobTitle) => setAttributes({ jobTitle })}
							/>
							{showCSeparator && <hr class="content_separator" />}

							{showDescs && (
								<RichText
									tagName="p"
									className="description"
									value={description}
									onChange={(description) => setAttributes({ description })}
								/>
							)}
						</div>
						{!socialInImage && showSocials && (
							<>
								{showSSeparator && <hr class="social_separator" />}
								<SocialLinks socialDetails={profilesOnly} />
							</>
						)}
					</div>
				</div>
			</div>
		</div>,
	];
}
