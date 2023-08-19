import PropTypes from 'prop-types';
import { List } from './StatsList.styled';

export const StatsListEl = ({ listData: { key, value } }) => {
  return (
    <List>
      <span className="label">{key}</span>
      <span className="quantity">{value}</span>
    </List>
  );
};

StatsListEl.propTypes = {
  listData: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};
