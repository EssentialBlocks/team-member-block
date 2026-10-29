import sanitizeLink from "../sanitize-link";

const { EBDisplayIcon } = window.EBTeamMemberControls;
export default function SocialLinks({
    socialDetails = [],
    icnEffect,
    linkNewTab,
    preset,
    // Kept for call-site compatibility; links are sanitized in both the
    // editor and saved markup. Allowed links are returned unchanged.
    isEditor = false,
}) {
    return (
        <ul className={`socials ${preset === 'new-preset3' ? 'socials-title' : ""}`}>
            {socialDetails.map(({ title, link, icon }, index) => (
                <li key={index}>
                    <a
                        className={icnEffect || " "}
                        href={link ? sanitizeLink(link) : "#"}
                        {...(link && {
                            target: linkNewTab ? "_blank" : "_self",
                        })}
                        // target={linkNewTab ? "_blank" : "_self"}
                        rel="noopener"
                        title={title ? title : ""}
                    >
                        <EBDisplayIcon className={'hvr-icon social-icon'} icon={icon} />
                        {preset === 'new-preset3' && title ? title : ""}
                    </a>
                </li>
            ))}
        </ul>
    );
}
