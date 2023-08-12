import React from 'react';
import './Parallax.scss';
import Bird from '../../assets/svgs/Parallax-Bird.svg';
import Island from '../../assets/svgs/Parallax-Island1.svg';
import Rocks from '../../assets/svgs/Parallax-Rocks.svg';
import Sea from '../../assets/svgs/Parallax-Sea1.svg';
import Sky from '../../assets/svgs/Parallax-Sky1.svg';

function Parallax() {
  return <div className='parallax-bg-container'>
      <img src={Sky} alt="Sky"/>
      <img src={Sea} alt="Sea"/>
      <img src={Island} alt='Island'/>
      <img src={Rocks} alt="Rocks"/>
      <img src={Bird} alt='Bird'/>
  </div>;
}

export default Parallax;
