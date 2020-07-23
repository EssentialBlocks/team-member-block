import React from "react";
import PropTypes from "prop-types";

const SocialLinks = ({ profileStyles, profiles }) => {
  const { container, iconWrapper } = profileStyles;

  return (
    <div className="profile-container" style={container}>
      {profiles.map(profile => (
        <a
          className={`profile-icon-wrapper`}
          href={profile.link}
          style={iconWrapper}
        >
          <i
            className={`profile-icon fab fa-${profile.icon}`}
            data-icon={profile.icon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

SocialLinks.propTypes = {
  profileStyles: PropTypes.shape({
    container: PropTypes.object.isRequired,
    iconWrapper: PropTypes.object.isRequired
  }),
  profiles: PropTypes.array.isRequired
};
