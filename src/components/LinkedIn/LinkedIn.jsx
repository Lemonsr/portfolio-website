import React from 'react';
import './LinkedIn.scss';

function LinkedIn() {
  return <div className='linkedin-container'>
    <div className='banner-picture'>

    </div>
    <div className='profile-picture'>

    </div>

    <p id='name'>
      Xin Yan Liaw
    </p>
    <p id='title'>
      Year 4 NUS Computer Science Student
    </p>
    <p id='country'>
      Singapore
    </p>

    <div>
      <p id='everyone-you-know'>
        Everyone you know follows this person
      </p>
    </div>

    <div className='linkedin-buttons'>
      <button>Connect</button>
      <button>Get her resume</button>
    </div>

  </div>
}

export default LinkedIn;
