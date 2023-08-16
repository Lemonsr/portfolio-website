import React from 'react';
import './Parallax.scss';
import Bird from '../../assets/svgs/Parallax-Bird.svg';
import Island from '../../assets/svgs/Parallax-Island1.svg';
import RockLeft from '../../assets/svgs/Parallax-Rock-Left.svg';
import RockRight from '../../assets/svgs/Parallax-Rock-Right.svg';
import Ripples from '../../assets/svgs/Parallax-Ripples.svg';
import Sea from '../../assets/svgs/Parallax-Sea1.svg';
import Sky from '../../assets/svgs/Parallax-Sky1.svg';
import { motion, useTransform, useScroll } from 'framer-motion';

function Parallax() {
  const { scrollY } = useScroll();
  const xRange = [0, window.innerWidth];
  const yRange = [0, window.innerHeight];
  const xPos = useTransform(scrollY, yRange, [0, window.innerWidth]);
  const yPos = useTransform(scrollY, yRange, [50, -window.innerHeight]);

  return <div className='parallax-bg-container'>
      <img src={Sky} alt='Sky'/>
      <img src={Sea} alt='Sea'/>
      <motion.img 
        initial={{ y: 100 }}
        animate={{ y: 20 }}
        transition={{
          type: 'spring',
          bounce: 0.6,
          duration: 2,
          delay: 1}}
       src={Island} alt='Island'/>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        src={Ripples} alt='Ripples'/>
      <img src={RockLeft} alt='Rocks'/>
      <img src={RockRight} alt='Rocks'/>
      <motion.img initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ x: xPos, y: yPos }}
      src={Bird} alt='Bird'/>
  </div>;
}

export default Parallax;
