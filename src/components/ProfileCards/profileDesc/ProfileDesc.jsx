import PropTypes from 'prop-types';
import { Wrapper, Name, Image, Text } from './ProfileDesc.styled';

export const ProfileDesc = ({
  userInfo: { username, tag, location, avatar },
}) => {
  return (
    <Wrapper className="description">
      <Image src={avatar} alt="User avatar" className="avatar" />
      <Name className="name">{username}</Name>
      <Text className="tag">@{tag}</Text>
      <Text className="location">{location}</Text>
    </Wrapper>
  );
};

ProfileDesc.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
