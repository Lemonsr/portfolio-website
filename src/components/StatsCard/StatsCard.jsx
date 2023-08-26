import React from 'react';
import './StatsCard.scss';
import { motion } from 'framer-motion';

function StatsCard({ data }) {
  return <motion.div className={'stats-card'}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.4, delay: data.id === '1' ? 0.05 : data.id === '2' ? 0.35 : 0.65}}>
    <h5 id='number' style={{ backgroundImage: data.colour }}>{ data.header }</h5>
    <p id='description'>{ data.description }</p>
  </motion.div>;
}

export default StatsCard;
