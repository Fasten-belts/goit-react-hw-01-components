import PropTypes from 'prop-types';
import { List } from './StatsList.styled';
import { TiUser, TiHeartFullOutline } from 'react-icons/ti';
import { AiFillEye } from 'react-icons/ai';

const labelIcon = (stats, color) => {
  switch (stats) {
    case 'followers':
      return <TiUser size={25} color={color} />;
    case 'views':
      return <AiFillEye size={25} color={color} />;
    case 'likes':
      return <TiHeartFullOutline size={25} color={color} />;
    default:
      return null;
  }
};

export const StatsListEl = ({ color, listData: { key, value } }) => {
  return (
    <List color={color}>
      {labelIcon(key, color)}
      <span className="label">{key}</span>
      <span className="quantity">{value}</span>
    </List>
  );
};

StatsListEl.propTypes = {
  color: PropTypes.string.isRequired,
  listData: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};
