import React from 'react';
import './MyArtworks.scss';
import { motion } from 'framer-motion';

function MyArtworks() {
  return <div id='artworks' className='myartworks-container'>
    <div className='content-container'>
      <div className='text-container'>
        <motion.h4 className='header'
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
            My Artworks
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
          <h2>Digital illustrations I drew for fun.</h2>
        </motion.div>
      </div>
    </div>
  </div>
}

export default MyArtworks;
