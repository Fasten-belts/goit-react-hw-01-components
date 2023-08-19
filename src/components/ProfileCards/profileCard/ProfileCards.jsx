import PropTypes from 'prop-types';
import { ProfileDesc } from '../profileDesc/ProfileDesc';
import { ProfileStats } from '../profileStats/ProfileStats';
import { Wrapper } from './ProfileCards.styled';

export const ProfileCards = ({
  users: { username, avatar, tag, location, stats },
}) => {
  return (
    <Wrapper className="profile">
      <ProfileDesc userInfo={{ username, tag, location, avatar }} />
      <ProfileStats userStats={stats} />
    </Wrapper>
  );
};

ProfileCards.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
