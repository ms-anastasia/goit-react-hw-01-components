import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
  <section class="statistics">
        <ul class="friend-list">
          {friends.map(friend => (
            <li class="item" key={friend.id}>
                <span class="status"></span>
                <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                  <p class="name">{friend.name }</p>
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