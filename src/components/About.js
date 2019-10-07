import React from 'react';
import MeditateInfo from './meditate/MeditateInfo';
import JournalBanner from './journals/JournalBanner';

function About() {
  return (
    <div id='about'>
      <div> 
        <MeditateInfo />
      </div>
      <div>
        <JournalBanner />
      </div>
    </div>
  )
}

export default About;
