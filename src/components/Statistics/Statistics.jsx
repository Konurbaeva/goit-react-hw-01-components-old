import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
  return (
<section className={styles.statistics}>
{title && <h2 className="title">{title}</h2>}

<ul className="stat-list">
  {stats.map(stat => (
  <li className="item" key={stat.id}>
  <span className="label">{stat.label}</span>
  <span className="percentage">{stat.percentage} %</span>
</li>
  ))}
</ul>
</section>
  );
};

  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.symbol
  }
