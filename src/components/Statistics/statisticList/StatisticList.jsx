import PropTypes from 'prop-types';
import { List } from './StatisticList.styled';

export const StatisticList = ({ id, label, percentage }) => {
  return (
    <List className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </List>
  );
};

StatisticList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
