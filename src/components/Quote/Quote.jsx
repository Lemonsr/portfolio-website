import React from 'react';
import './Quote.scss';
import { motion } from 'framer-motion';

function Quote() {
  return <div className='quote-container section'>
    <motion.div className='content-container'
      initial={{ opacity: 0, y: 150 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        bounce: 0.4,
        duration: 2}}
    >
      <h1>I am constantly learning</h1>
      <h1>new best practices</h1>
      <h1>and workflows.</h1>
    </motion.div>
  </div>
}

export default Quote;
