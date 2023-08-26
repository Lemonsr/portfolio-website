import React from 'react';
import './ContactMe.scss';
import { motion } from 'framer-motion';
import LinkedIn from '../LinkedIn/LinkedIn';
import Underline from '../../assets/svgs/Underline.svg';
// import AnimatedLine from '../AnimatedLine/AnimatedLine';

function ContactMe() {
  return <div id='contact' className='contact-container section'>
    <div className='text-container'>
      <motion.h4 className='header text'
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>
          Contact Me
      </motion.h4>
      <motion.div className='text'
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>
        <h2>Interested in</h2>
        <h2 id='working-with-me'>working with me?</h2>
        <h2 className='animated-text'>Get in touch.</h2>
      </motion.div>
      
      <img className='underline' src={Underline} alt='Underline'/>

      {/* 
      Not using animatedline as the code is depreciated.
      <div>
        <AnimatedLine />
      </div> */}
    </div>
    
    <div className='linkedin'>
      <LinkedIn />
    </div>
  </div>
}

export default ContactMe;
