//   [
//     { "id": "id-1", "label": ".docx", "percentage": 22 },
//     { "id": "id-2", "label": ".pdf", "percentage": 4 },
//     { "id": "id-3", "label": ".mp3", "percentage": 17 },
//     { "id": "id-4", "label": ".psd", "percentage": 47 },
//     { "id": "id-5", "label": ".pdf", "percentage": 10 }
//   ]

export const Statistics = ({title, stats}) => {
    return (
    <section className="statistics">
  {title? <h2 className="title">Upload stats</h2>: null}

  <ul className="stat-list">
    <li className="item">
      <span className="label">{stats[0].label}</span>
      <span className="percentage">{stats[0].percentage} %</span>
    </li>
    <li className="item">
      <span className="label">{stats[1].label}</span>
      <span className="percentage">{stats[1].percentage} %</span>
    </li>
    <li className="item">
      <span className="label">{stats[2].label}</span>
      <span className="percentage">{stats[2].percentage} %</span>
    </li>
    <li className="item">
      <span className="label">{stats[3].label}</span>
      <span className="percentage">{stats[3].percentage} %</span>
    </li>
  </ul>
</section>
    );
  };

