import React from 'react';
import './AnimatedButton.scss';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.a
      className="animated-button"
      href="https://www.instagram.com/nyamii_/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1, padding: '1.8rem 3rem' }}
      whileHover={{ 
        scale: 1.1, 
        padding: '1.8rem 3rem', 
        backgroundImage: "url('src/assets/images/InstagramBg.webp')", 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <div className='logo'>
        <img src = "src/assets/svgs/Instagram.svg" alt="Instagram Logo"/>
      </div>
      <div className='label-text'>
        <p id='view-more-at'>VIEW MORE AT</p>
        <p id='name'>@NYAMII_</p>
      </div>
    </motion.a>
  );
};

export default AnimatedButton;
