import React from 'react';
import "./NavBar.scss";
import { motion } from 'framer-motion';

function NavBar() {
  return <motion.div
          className='navbar-container'
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.5 }}>

        <div className='navbar'>
          <motion.a whileHover={{ scale: 1.1 }} href='#home'>Home</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#about-me'>About Me</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#projects'>Projects</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#artworks'>Artworks</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#contact'>Contact</motion.a>
        </div>

      </motion.div>;
}

export default NavBar;