import React from 'react';
import "./NavBar.scss";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function NavBar() {
  return <motion.div
          className='navbar-container'
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.5 }}>

            <div className='navbar'>
              <motion.div whileHover={{ scale: 1.1 }}><Link to="home" smooth>Home</Link></motion.div>
              <motion.div whileHover={{ scale: 1.1 }}><Link to="about-me" smooth>About Me</Link></motion.div>
              <motion.div whileHover={{ scale: 1.1 }}><Link to="projects" smooth>Projects</Link></motion.div>
              <motion.div whileHover={{ scale: 1.1 }}><Link to="artworks" smooth>Artworks</Link></motion.div>
              <motion.div whileHover={{ scale: 1.1 }}><Link to="contact" smooth>Contact</Link></motion.div>
            </div>

          </motion.div>;
}

export default NavBar;