import React, { useRef, useEffect } from 'react';
import './Parallax.scss';
import Bird from '../../assets/svgs/Parallax-Bird.svg';
import Island from '../../assets/svgs/Parallax-Island2.svg';
import RockLeft from '../../assets/svgs/Parallax-Rock-Left.svg';
import RockRight from '../../assets/svgs/Parallax-Rock-Right.svg';
import Ripples from '../../assets/svgs/Parallax-Ripples2.svg';
import Sea from '../../assets/svgs/Parallax-Sea2.svg';
import Sky from '../../assets/svgs/Parallax-Sky2.svg';
import { motion, useTransform, useScroll } from 'framer-motion';

function Parallax({ adjustHeight }) {
  const { scrollY } = useScroll();
  const xRange = [0, window.innerWidth];
  const yRange = [0, window.innerHeight];
  const xPos = useTransform(scrollY, yRange, [0, window.innerWidth]);
  const yPos = useTransform(scrollY, yRange, [50, -window.innerHeight]);

  // adjust height of parallax bg dynamically to show the entire bg with aspect ratio of screen despite absolute positioning
  const childRef = useRef(null);

  useEffect(() => {
    if (childRef.current && adjustHeight) {
      const childHeight = childRef.current.offsetHeight;
      adjustHeight(childHeight);
    }
  }, [adjustHeight]);

  return <div className='parallax-bg-container'>
      <img src={Sky} ref={childRef} alt='Sky'/>
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
