import PropTypes from 'prop-types';
import s from "./Friend-List.module.css";

function FriendList({ friends}) {
  return (
  <section class="statistics">
      <ul className={s.List}>
          {friends.map(friend => (
            <li className={s.Item} key={friend.id}>
              <span className={friend.isOnline ? s.statusOnline : s.statusOffline}></span>
              <img className={s.Avatar} src={friend.avatar} alt="User avatar" width="48" />
              <p className={s.Name }>{friend.name }</p>
            </li>
          ))}
        </ul>
  </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar:PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;