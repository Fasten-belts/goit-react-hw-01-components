import PropTypes from 'prop-types';
import { StatsListEl } from '../statsList/StatsList';
import { Stats } from './ProfileStats.styled';

export const ProfileStats = ({ userStats }) => {
  const statsEntries = Object.entries(userStats);
  return (
    <Stats className="stats">
      {statsEntries.map(([key, value]) => {
        let color;
        switch (key) {
          case 'followers':
            color = '#345492';
            break;
          case 'views':
            color = '#56953e';
            break;
          case 'likes':
            color = '#990000';
            break;
          default:
            color = 'black';
        }

        return (
          <StatsListEl key={key} listData={{ key, value }} color={color} />
        );
      })}
    </Stats>
  );
};

ProfileStats.propTypes = {
  userStats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
