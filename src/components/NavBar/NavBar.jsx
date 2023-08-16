import React from 'react';
import "./NavBar.scss";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function NavBar() {
  return <motion.div
          className='navbar-container'
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.5 }}>

        <div className='navbar'>
          <motion.a whileHover={{ scale: 1.1 }} href='#home'><Link to="home" smooth>Home</Link></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#about-me'><Link to="about-me" smooth>About Me</Link></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#projects'><Link to="projects" smooth>Projects</Link></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#artworks'><Link to="artworks" smooth>Artworks</Link></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#contact'><Link to="contact" smooth>Contact</Link></motion.a>
        </div>

      </motion.div>;
}

export default NavBar;