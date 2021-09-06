export default function SocialLinks({ socialDetails = [], icnEffect }) {
	return (
		<ul className="socials">
			{socialDetails.map(({ link, icon }) => (
				<li>
					<a className={icnEffect || " "} href={link}>
						<i className={`hvr-icon social-icon ${icon}`}></i>
					</a>
				</li>
			))}
		</ul>
	);
}
