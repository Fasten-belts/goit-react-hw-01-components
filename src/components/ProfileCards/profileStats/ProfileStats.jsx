import PropTypes from 'prop-types';
import { StatsListEl } from '../statsList/StatsList';
import { Stats } from './ProfileStats.styled';

export const ProfileStats = ({ userStats }) => {
  const statsEntries = Object.entries(userStats);
  return (
    <Stats className="stats">
      {statsEntries.map(([key, value]) => {
        return <StatsListEl listData={{ key, value }} key={key} />;
      })}
    </Stats>
  );
};

ProfileStats.propTypes = {
  userStats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
