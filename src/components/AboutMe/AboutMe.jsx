import React from 'react';
import './AboutMe.scss';
import Lace from '../../assets/images/Lace-Bg.webp';
import CardMe from '../../assets/images/Card-Me.webp';
import CardMbti from '../../assets/images/Card-Mbti.webp';
import CardHome from '../../assets/images/Card-Home.webp';
import CardHoroscope from '../../assets/images/Card-Horoscope.webp';
import MiniCardDangan from '../../assets/images/Danganronpa.webp';
import MiniCardPersona from '../../assets/images/Persona.webp';
import MiniCardTetris from '../../assets/images/Tetris.webp';
import MiniCardValorant from '../../assets/images/Valorant.webp';
import StatsCard from '../StatsCard/StatsCard';
import cardConfigs from '../StatsCard/StatsCardDescriptions';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
          <h2 id='my-skill-set'>My skill set and</h2>
          <h2>expertise.</h2>
        </motion.div>
        <p id='with-over'>With over 6 years of experience as a digital illustrator, I've honed my skills in creating intuitive, user-centered designs that are both aesthetically pleasing and interactive. I taught myself HTML, CSS, and JavaScript to bring my designs to life, and I'm always seeking opportunities to enhance my skills!</p>
      </div>
      <div className='stats-container'>
        {cardConfigs.map((config) => {
          return <StatsCard key={config.id} data={config}/>
        })}
        {/* Loops through cardConfig data and creates StatsCards */}
      </div>
    </div>
    <div className='cards-container'>
      <img className='lace' src={Lace} alt='Lace'/>
      <img className='card' id='card-horoscope' src={CardHoroscope} alt='My Horoscope'/>
      <img className='card' id='card-home' src={CardHome} alt='My Home'/>
      <img className='card' id='card-mbti' src={CardMbti} alt='My Mbti'/>
      <img className='mini' id='card-dangan' src={MiniCardDangan} alt='Danganronpa'/> 
      <img className='mini' id='card-persona' src={MiniCardPersona} alt='Persona'/> 
      <img className='mini' id='card-tetris' src={MiniCardTetris} alt='Tetris'/> 
      <img className='mini' id='card-valorant' src={MiniCardValorant} alt='Valorant'/> 
      <img className='card' id='card-me' src={CardMe} alt='My info'/> 
    </div>
    
  </div>;
}

export default AboutMe;
