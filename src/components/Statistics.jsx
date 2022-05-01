//   [
//     { "id": "id-1", "label": ".docx", "percentage": 22 },
//     { "id": "id-2", "label": ".pdf", "percentage": 4 },
//     { "id": "id-3", "label": ".mp3", "percentage": 17 },
//     { "id": "id-4", "label": ".psd", "percentage": 47 },
//     { "id": "id-5", "label": ".pdf", "percentage": 10 }
//   ]
import PropTypes from 'prop-types';

export const Statistics = ({title,
   stats: { label, percentage}}) => {
    return (
    <section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
  </ul>
</section>
    );
  };

  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.symbol
  }
