import React from 'react';
import './StatsCard.scss';

function StatsCard({ data }) {
  return <div className='stats-card'>
    <h5 id='header' style={{ backgroundImage: data.colour }}>{ data.header }</h5>
    <p id='description'>{ data.description }</p>
  </div>;
}

export default StatsCard;
