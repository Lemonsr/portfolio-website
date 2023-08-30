import React from 'react';
import './LinkedIn.scss';
import Banner from '../../assets/images/Banner.png';
import ProfilePicture from '../../assets/images/Profile-Picture.png';
import Connections from '../../assets/images/Connections.png';

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
      <img className='connections-pics' src={Connections} alt='Connections'/>
      <p id='everyone-you-know'>
        Everyone you know follows this person
      </p>
    </div>

    <div className='linkedin-buttons'>
      <a className='connect' 
        href="https://www.linkedin.com/in/liawxinyan2001/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect
      </a>
      <a className='resume'
        href= {window.location.origin + "/xinyanresume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get her resume
      </a>
    </div>

  </div>
}

export default LinkedIn;
