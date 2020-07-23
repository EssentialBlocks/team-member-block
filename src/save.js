/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */
import SocialLinks from "./social-links";
import {
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
} from "./constants";

const Save = ({ attributes }) => {
	const {
		imageUrl,
		imageHeight,
		imageWidth,
		memberName,
		jobTitle,
		jobDetails,
		contactAlign,
		nameColor,
		nameFontSize,
		jobTitleColor,
		jobTitleFontSize,
		jobDetailsColor,
		jobDetailsFontSize,
		borderRadius,
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
		nameFontSizeUnit,
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

	const wrapperStyle = {
		margin: `${marginTop || 0}${marginUnit} ${marginRight || 0}${marginUnit} ${
			marginBottom || 0
		}${marginUnit} ${marginLeft || 0}${marginUnit}`,
		padding: `${paddingTop || 0}${paddingUnit} ${
			paddingRight || 0
		}${paddingUnit} ${paddingBottom || 0}${paddingUnit} ${
			paddingLeft || 0
		}${paddingUnit}`,
		boxShadow: `${shadowHOffset || 0}px ${shadowVOffset || 0}px ${
			shadowBlur || 0
		}px ${shadowSpread || 0}px ${shadowColor || "#000000"}`,
		border: `${borderWidth || 0}px ${borderStyle} ${borderColor || "#000000"}`,
	};

	const imageStyle = {
		margin:
			contactAlign === "left"
				? "0px 0px 0px 0px"
				: contactAlign === "center"
				? "0 auto"
				: "0px 0px 0px auto",
		height: `${imageHeight}px`,
		width: `${imageWidth}px`,
		borderRadius: `${borderRadius}%`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const contactStyle = {
		textAlign: contactAlign,
	};

	const memberNameStyle = {
		color: nameColor || DEFAULT_NAME_COLOR,
		fontSize: `${nameFontSize || DEFAULT_NAME_SIZE}${nameUnit}`,
		fontFamily: nameFontFamily,
		fontWeight: nameFontWeight,
		textTransform: nameTextTransform,
		textDecoration: nameTextDecoration,
		letterSpacing: nameLetterSpacing
			? `${nameLetterSpacing}${nameLetterSpacingUnit}`
			: undefined,
		lineHeight: nameLineHeight
			? `${nameLineHeight}${nameLineHeightUnit}`
			: undefined,
	};

	const jobTitleStyle = {
		color: jobTitleColor || DEFAULT_JOB_TITLE_COLOR,
		fontSize: `${jobTitleFontSize || DEFAULT_JOB_TITLE_SIZE}${jobTitleUnit}`,
		fontFamily: jobTitleFontFamily,
		fontWeight: jobTitleFontWeight,
		textTransform: jobTitleTextTransform,
		textDecoration: jobTitleTextDecoration,
		letterSpacing: jobTitleLetterSpacing
			? `${jobTitleLetterSpacing}${jobTitleLetterSpacingUnit}`
			: undefined,
		lineHeight: jobTitleLineHeight
			? `${jobTitleLineHeight}${jobTitleLineHeightUnit}`
			: undefined,
	};

	const jobDetailsStyle = {
		color: jobDetailsColor || DEFAULT_JOB_DETAILS_COLOR,
		fontSize: `${
			jobDetailsFontSize || DEFAULT_JOB_DETAILS_SIZE
		}${jobDetailsUnit}`,
		fontFamily: detailsFontFamily,
		fontWeight: detailsFontWeight,
		textTransform: detailsTextTransform,
		textDecoration: detailsTextDecoration,
		letterSpacing: detailsLetterSpacing
			? `${detailsLetterSpacing}${detailsLetterSpacingUnit}`
			: undefined,
		lineHeight: detailsLineHeight
			? `${detailsLineHeight}${detailsLineHeightUnit}`
			: undefined,
	};

	const profileStyles = {
		container: {
			fontSize: `${socialIconSize || DEFAULT_PROFILE_SIZE}${iconSizeUnit}`,
			display: "flex",
			justifyContent: socialIconAlign,
		},
		iconWrapper: {
			textDecoration: "none",
			color: socialIconColor || DEFAULT_PROFILE_COLOR,
			paddingRight: `${socialIconSpacing || 10}${iconSpaceUnit}`,
		},
	};

	return (
		<div className="eb-team-member-container">
			<div className="eb-team-member-column" style={wrapperStyle}>
				<div
					style={{
						...imageStyle,
						backgroundImage: `url(${imageUrl})`,
						display: imageUrl ? "block" : "none",
					}}
				/>

				<div style={contactStyle}>
					<RichText.Content
						tagName="h3"
						className="eb-member-name"
						value={memberName}
						style={memberNameStyle}
					/>

					<RichText.Content
						tagName="h4"
						className="eb-member-job-title"
						value={jobTitle}
						style={jobTitleStyle}
					/>

					<RichText.Content
						tagName="p"
						className="eb-member-job-details"
						value={jobDetails}
						style={jobDetailsStyle}
					/>

					<SocialLinks
						profileStyles={profileStyles}
						profiles={socialProfiles}
					/>
				</div>
			</div>
		</div>
	);
};

export default Save;
