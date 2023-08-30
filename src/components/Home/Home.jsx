import React, { useRef } from 'react';
import './Home.scss';
import Parallax from '../Parallax/Parallax';
import { motion } from 'framer-motion';

function Home() {
  const parentRef = useRef(null);

  const adjustParentHeight = (childHeight) => {
    if (parentRef.current) {
      parentRef.current.style.height = `${childHeight}px`;
    }
  };

  return <div id='home' className='home-container' ref={parentRef}>

    <Parallax adjustHeight={adjustParentHeight}/>

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
            Hi there, I'm&nbsp;
            <span className='fade-text'>
              <span className='initial-text'>Xin Yan<span className='full-stop'>!</span></span>
              <span className='hover-text'>歆妍<span className='full-stop'>!</span></span>
            </span>
          </h3>
      </div>

      <div className='animated-text' id='an-aspiring'>
        <h1>An aspiring UI/UX designer</h1>
        <h1>looking to make stunning,</h1>
        <h1>user-friendly digital</h1>
        <h1>experiences.</h1>
      </div>

      <motion.a  
      className='find-out-more'
      href='#about-me' 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        damping: 4, 
        duration: 1, 
        delay: 0.8 }}
      >
      Find out more
      <span className='arrow'>→</span>
      </motion.a>

    </motion.div>
  </div>;
}

export default Home;
