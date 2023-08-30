import React from 'react';
import "./NavBar.scss";
import { motion } from 'framer-motion';

function NavBar() {
  return <motion.div
    className='navbar-container'
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: 'spring', duration: 1, delay: 0.5 }}>

      <div className='navbar'>
        <a href="#home">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#artworks">Artworks</a>
        <a href="#contact">Contact</a>
      </div>

    </motion.div>;
}

export default NavBar;