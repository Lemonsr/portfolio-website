import React from 'react';
import "./AboutMe.scss";
import Lace from '../../assets/svgs/Lace-Bg.svg';
import CardMe from '../../assets/svgs/Card-Me.svg';
import CardMbti from '../../assets/svgs/Card-Mbti.svg';
import CardHome from '../../assets/svgs/Card-Home.svg';
import CardHoroscope from '../../assets/svgs/Card-Horoscope.svg';
import MiniCardDangan from '../../assets/svgs/Danganronpa.svg';
import MiniCardPersona from '../../assets/svgs/Persona.svg';
import MiniCardTetris from '../../assets/svgs/Tetris.svg';
import MiniCardValorant from '../../assets/svgs/Valorant.svg';
import StatsCard from '../StatsCard/StatsCard';
import cardConfigs from '../StatsCard/StatsCardDescriptions';

function AboutMe() {
  return <div className='aboutme-container'>
    <div className='content-container'>
      <div className='text-container'>
        <h4 id='about-me'>About Me</h4>
        <h2 id='my-skill-set'>My skill set and</h2>
        <h2>expertise.</h2>
        <p id='with-over'>With over 6 years of experience as a digital illustrator, I’ve honed my skills in creating intuitive, user-centred designs that are both beautiful and interactive. I taught myself HTML, CSS, and JavaScript to bring my designs to life and i’m always looking to improve my skills!</p>
      </div>
      <div className='stats-container'>
        {cardConfigs.map((config) => {
          return <StatsCard data={config}/>
        })}
        {/* Loops through cardConfig data and creates StatsCards */}
      </div>
    </div>
    <div className='cards-container'>
      <img className='lace' src={Lace} alt="Lace"/>
      <img className='card' id='card-horoscope' src={CardHoroscope} alt="My Horoscope"/>
      <img className='card' id='card-home' src={CardHome} alt="My Home"/>
      <img className='card' id='card-mbti' src={CardMbti} alt="My Mbti"/>
      <img className='mini' id='card-dangan' src={MiniCardDangan} alt="Danganronpa"/> 
      <img className='mini' id='card-persona' src={MiniCardPersona} alt="Persona"/> 
      <img className='mini' id='card-tetris' src={MiniCardTetris} alt="Tetris"/> 
      <img className='mini' id='card-valorant' src={MiniCardValorant} alt="Valorant"/> 
      <img className='card' id='card-me' src={CardMe} alt="My info"/> 
    </div>
    
  </div>;
}

export default AboutMe;
