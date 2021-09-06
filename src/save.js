const { useBlockProps, RichText } = wp.blockEditor;

import SocialLinks from "./components/social-links";

export default function Save({ attributes }) {
	const {
		blockId,

		// member name
		name,

		// job title
		jobTitle,

		// member description
		description,

		//
		showDescs,
		showSocials,
		showCSeparator,
		showSSeparator,
		//
		imageUrl,

		// social profiles
		// socialDetails,
		profilesOnly,

		//
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
							<SocialLinks socialDetails={profilesOnly} icnEffect={icnEffect} />
						)}
					</div>
					<div className="contents">
						<div className="texts">
							<RichText.Content tagName="h3" className="name" value={name} />
							<RichText.Content
								tagName="h4"
								className="job_title"
								value={jobTitle}
							/>

							{showCSeparator && <hr class="content_separator" />}

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
								{showSSeparator && <hr class="social_separator" />}
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
}
