import PropTypes from 'prop-types';
import styles from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
stats
}) => {
  return (
    <div className = {styles.Profile}>
      <div className={styles.Description}>
        <img
          src={avatar}
          alt="User avatar"
          width="150"
          className={styles.Avatar}
        />
        <p className={styles.Name}>{username}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{stats.likes}</span>
        </li>
      </ul>
</div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;