/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

import attributes from "./attributes";
import SocialLinks from "./components/social-links";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			align: ["wide", "full"],
		},
		save: ({ attributes }) => {
			const {
				blockId,
				name,
				jobTitle,
				description,
				showDescs,
				showSocials,
				showCSeparator,
				showSSeparator,
				imageUrl,
				profilesOnly,
				socialInImage,
				icnEffect,
			} = attributes;

			return (
				<div {...useBlockProps.save()}>
					<div className={`${blockId} eb-team-wrapper`}>
						<div className="eb-team-inner">
							<div className="image">
								<img className="avatar" src={imageUrl} alt="member" />
								{socialInImage && showSocials && (
									<SocialLinks
										socialDetails={profilesOnly}
										icnEffect={icnEffect}
									/>
								)}
							</div>
							<div className="contents">
								<div className="texts">
									<RichText.Content
										tagName="h3"
										className="name"
										value={name}
									/>
									<RichText.Content
										tagName="h4"
										className="job_title"
										value={jobTitle}
									/>

									{showCSeparator && <hr className="content_separator" />}

									{showDescs && (
										<RichText.Content
											tagName="p"
											className="description"
											value={description}
										/>
									)}
								</div>
								{!socialInImage && showSocials && (
									<>
										{showSSeparator && <hr className="social_separator" />}
										<SocialLinks
											socialDetails={profilesOnly}
											icnEffect={icnEffect}
										/>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;