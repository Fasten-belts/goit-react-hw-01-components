import PropTypes from 'prop-types';
import { List, Status } from './FriendListItem.styled';
import { TiSocialInstagramCircular } from 'react-icons/ti';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <List className="item">
      <Status isOnline={isOnline} className="status">
        <TiSocialInstagramCircular size={25} />
      </Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </List>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
