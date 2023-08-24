import React from 'react';
import './LinkedIn.scss';
import Banner from '../../assets/svgs/Banner.svg';
import ProfilePicture from '../../assets/svgs/Profile-Picture.svg';
import Connections from '../../assets/svgs/Connections.svg';

function LinkedIn() {
  return <div className='linkedin-container'>

    <img className='banner-picture' src={Banner} alt='Banner'/>
    <img className='profile-picture' src={ProfilePicture} alt='ProfilePicture'/>
    
    <p id='name'>
      Xin Yan Liaw
    </p>
    <p id='title'>
      Year 4 NUS Computer Science Student
    </p>
    <p id='country'>
      Singapore
    </p>

    <div className='connections-container'>
      <img src={Connections} alt='Connections'/>
      <p id='everyone-you-know'>
        Everyone you know follows this person
      </p>
    </div>

    <div className='linkedin-buttons'>
      <a className='connect' 
      href="https://www.linkedin.com/in/liawxinyan2001/"
      target="_blank"
      rel="noopener noreferrer">Connect</a>
      <a className='resume'>Get her resume</a>
    </div>

  </div>
}

export default LinkedIn;
