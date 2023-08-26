import React from 'react';
import './AnimatedProfileCards.scss';
import Lace from '../../assets/images/Lace-Bg.webp';
import CardMe from '../../assets/images/Card-Me.webp';
import CardMbti from '../../assets/images/Card-Mbti.webp';
import CardHome from '../../assets/images/Card-Home.webp';
import CardHoroscope from '../../assets/images/Card-Horoscope.webp';
import MiniCardDangan from '../../assets/images/Danganronpa.webp';
import MiniCardPersona from '../../assets/images/Persona.webp';
import MiniCardTetris from '../../assets/images/Tetris.webp';
import MiniCardValorant from '../../assets/images/Valorant.webp';

function AnimatedProfileCards() {
  return <div className='cards-container'>
    <img className='lace' src={Lace} alt='Lace'/>
    <img className='card' id='card-horoscope' src={CardHoroscope} alt='My Horoscope'/>
    <img className='card' id='card-home' src={CardHome} alt='My Home'/>
    <img className='card' id='card-mbti' src={CardMbti} alt='My Mbti'/>
    <img className='mini' id='card-dangan' src={MiniCardDangan} alt='Danganronpa'/> 
    <img className='mini' id='card-persona' src={MiniCardPersona} alt='Persona'/> 
    <img className='mini' id='card-tetris' src={MiniCardTetris} alt='Tetris'/> 
    <img className='mini' id='card-valorant' src={MiniCardValorant} alt='Valorant'/> 
    <img className='card' id='card-me' src={CardMe} alt='My info'/> 
  </div>;
}

export default AnimatedProfileCards;
