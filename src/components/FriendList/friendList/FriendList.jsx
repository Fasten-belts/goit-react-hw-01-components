import PropTypes from 'prop-types';
import { FriendListItem } from '../friendListItem/FriendListItem';
import { Card } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Card className="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </Card>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
