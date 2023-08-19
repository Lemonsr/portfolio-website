import React, { Component } from 'react';
import './MyArtworks.scss';
import { motion } from 'framer-motion';
import Carousels from '../Carousels/Carousels';
import AnimatedButton from '../AnimatedButton/AnimatedButton';

function MyArtworks() {
  return <div id='artworks' className='myartworks-container section'>
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
      <div>
        <Carousels />
      </div>
      <div>
        <AnimatedButton />
      </div>
    </div>
  </div>
}

export default MyArtworks;
