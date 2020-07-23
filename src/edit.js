/**
 * Internal dependencies
 */
import SocialLinks from "./social-links";
import Inspector from "./inspector";
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

/**
 * WordPress dependencies
 */
import {__} from "@wordpress/i18n";
import {Button} from "@wordpress/components";
import{ MediaUpload, RichText, BlockControls, BlockAlignmentToolbar }  from "@wordpress/editor";

const Edit = (props) => {
	const { isSelected, attributes, setAttributes } = props;
	const {
		imageUrl,
		imageId,
		imageHeight,
		imageWidth,
		memberName,
		jobTitle,
		jobDetails,
		contactAlign,
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
		}px ${shadowSpread || 0}px ${shadowColor || DEFAULT_SHADOW_COLOR}`,
		border: `${borderWidth || 0}px ${borderStyle} ${
			borderColor || DEFAULT_BORDER_COLOR
		}`,
	};
	const uploadButtonStyle = {
		margin:
			contactAlign === "left"
				? "0px 0px 0px 0px"
				: contactAlign === "center"
				? "0 auto"
				: "0px 0px 0px auto",
		height: UPLOAD_BUTTON_HEIGHT,
		width: UPLOAD_BUTTON_WIDTH,
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

	return [
		isSelected && <Inspector {...props} />,
		<BlockControls>
			<BlockAlignmentToolbar
				value={contactAlign}
				onChange={(newAlign) => setAttributes({ contactAlign: newAlign })}
				controls={["left", "center", "right"]}
			/>
		</BlockControls>,

		<div className="eb-team-member-container">
			<div className="eb-team-member-column" style={wrapperStyle}>
				<MediaUpload
					onSelect={(media) =>
						setAttributes({
							imageUrl: media.url,
							imageId: media.id,
						})
					}
					type="image"
					value={imageId}
					render={({ open }) =>
						!imageUrl && (
							<div style={uploadButtonStyle}>
								<Button
									className="eb-team-member-image components-button"
									label={__("Upload Image")}
									icon="format-image"
									onClick={open}
								/>
							</div>
						)
					}
				/>

				<div
					style={{
						...imageStyle,
						backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
						display: imageUrl ? "block" : "none",
					}}
				/>

				<div style={contactStyle}>
					<RichText
						tagName="h3"
						className="eb-member-name"
						placeholder={__("Name")}
						value={memberName}
						onChange={(newName) => setAttributes({ memberName: newName })}
						style={memberNameStyle}
					/>
					<RichText
						tagName="h4"
						className="eb-member-job-title"
						placeholder={__("Job Title")}
						value={jobTitle}
						onChange={(newTitle) => setAttributes({ jobTitle: newTitle })}
						style={jobTitleStyle}
					/>
					<RichText
						tagName="p"
						className="eb-member-job-details"
						placeholder={__("Job Details")}
						value={jobDetails}
						onChange={(newDetails) => setAttributes({ jobDetails: newDetails })}
						style={jobDetailsStyle}
					/>

					<SocialLinks
						profiles={socialProfiles}
						profileStyles={profileStyles}
					/>
				</div>
			</div>
		</div>,
	];
};

export default Edit;
