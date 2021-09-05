export default function SocialLinks({ socialDetails = [] }) {
	return (
		<ul className="socials">
			{socialDetails.map(({ link, icon }) => (
				<li>
					<a href={link}>
						<i className={`social-icon ${icon}`}></i>
					</a>
				</li>
			))}
		</ul>
	);
}
