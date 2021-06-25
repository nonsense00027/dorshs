import React from 'react';
import Blur from './Blur';
import History from './History';
import MissViss from './MissViss';
import Teachers from './Teachers';
import './About.css';


function About() {
  return (
    <div className='about'>
      <div className="about__blur">
          <Blur />
      </div>
      <div className="about__history">
        <History />
      </div>
      <div className="about__missviss">
        <MissViss />
      </div>
      <div className="about__teachers">
        <Teachers />
      </div>
    </div>
  )
}

export default About
