import React from 'react';
import MeditateInfo from './meditate/MeditateInfo';
import JournalBanner from './journals/JournalBanner';

function About() {
  return (
    <div id='about'>
      <div class="col s8 m4 l9"> 
        <MeditateInfo />
      </div>
      <div class="col s4 m8 l3">
        <JournalBanner />
      </div>
    </div>
  )
}

export default About;
