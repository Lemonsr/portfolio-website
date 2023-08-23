import React from 'react';
import './ContactMe.scss';
import AnimatedLine from '../AnimatedLine/AnimatedLine';
import { motion } from 'framer-motion';
import LinkedIn from '../LinkedIn/LinkedIn';

function ContactMe() {
  return <div id='contact' className='contact-container section'>
    <div className='content-container'>
      <div className='text-container'>
        <motion.h4 className='header'
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
            Contact Me
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
          <h2>Interested in</h2>
          <h2>working with me?</h2>
          <h2 className='animated-text'>Get in touch.</h2>
        </motion.div>
        <div>
          <AnimatedLine />
        </div>
      </div>
      
      <LinkedIn />
    
    </div>
  </div>
}

export default ContactMe;
