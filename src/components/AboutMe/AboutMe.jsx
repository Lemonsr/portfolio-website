import React from 'react';
import './AboutMe.scss';
import StatsCard from '../StatsCard/StatsCard';
import cardConfigs from '../StatsCard/StatsCardDescriptions';
import { motion } from 'framer-motion';
import AnimatedProfileCards from '../AnimatedProfileCards/AnimatedProfileCards';

function AboutMe() {
  return <div id='about-me' className='aboutme-container section'>
    <div className='content-container'>
      <div className='text-container'>
        <motion.h4 className='header'
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
            About Me
        </motion.h4>
        <motion.div className='title-text'
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
          <h2>My skill set and</h2>
          <h2>expertise.</h2>
        </motion.div>
        <p className='main-text'>Nothing excites me more than creating solutions that brings people joy. With over 6 years of experience as a digital illustrator hobbyist, I’ve honed my skills in creating intuitive, user-centred designs that are both beautiful and interactive using Figma. </p>
        <p className='main-text'>In my spare time, you can catch me doodling characters on blank canvases or indulging in video games.</p>
      </div>
      <div className='stats-container'>
        {cardConfigs.map((config) => {
          return <StatsCard key={config.id} data={config}/>
        })}
        {/* Loops through cardConfig data and creates StatsCards */}
      </div>
    </div>
    <AnimatedProfileCards/>
  </div>;
}

export default AboutMe;
