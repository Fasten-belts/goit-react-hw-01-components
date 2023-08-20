import PropTypes from 'prop-types';
import { StatisticList } from '../statisticList/StatisticList';
import { Stats, Section } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <Stats className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticList
            id={id}
            label={label}
            percentage={percentage}
            key={id}
          />
        ))}
      </Stats>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
