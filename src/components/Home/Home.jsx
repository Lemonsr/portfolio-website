import React from 'react';
import "./Home.scss";
import Parallax from '../Parallax/Parallax';
import { motion } from 'framer-motion';

function Home() {
  return <div className='home-container'>

    <Parallax />

    <motion.div  
      className='content-container'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring',
        damping: 6,
        duration: 1,
        delay: 0.5 }}>

      <div className='name-container'>        
          <h3 id='hello'>
            Hello, my name is&nbsp;
            <span className='fade-text'>
              <span className='initial-text'>Xin Yan<span className="full-stop">.</span></span>
              <span className='hover-text'>歆妍<span className="full-stop">.</span></span>
            </span>
          </h3>
      </div>

      <div id='an-aspiring'>
        <h1>An aspiring UI/UX designer</h1>
        <h1>looking to make stunning,</h1>
        <h1>user-friendly digital</h1>
        <h1>experiences.</h1>
      </div>

      <motion.div  
      className='button-container'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        damping: 4, 
        duration: 1, 
        delay: 0.8 }}>

      <button id='find-out-more'>Find out more
        <span className="arrow">→</span>
      </button>

      </motion.div>

    </motion.div>
  </div>;
}

export default Home;
