import sanitizeLink from "../sanitize-link";

const { EBDisplayIcon } = window.EBTeamMemberControls;
export default function SocialLinks({
    socialDetails = [],
    icnEffect,
    linkNewTab,
    preset,
    // The editor shows links straight from the block attributes; saved markup
    // is left as is, so existing blocks keep validating.
    isEditor = false,
}) {
    return (
        <ul className={`socials ${preset === 'new-preset3' ? 'socials-title' : ""}`}>
            {socialDetails.map(({ title, link, icon }, index) => (
                <li key={index}>
                    <a
                        className={icnEffect || " "}
                        href={link ? (isEditor ? sanitizeLink(link) : link) : "#"}
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
