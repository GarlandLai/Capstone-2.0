import React from 'react';
import water from '../images/waterfall.mp4';

function Header() {
  return (
    <div>
      <div className="jumbotron">
        <h1>Ziai</h1>
        <p>Improving your life one step at a time</p>
      <video className='responsive-video' autoPlay loop>
        <source src={water} type='video/mp4'/>
      </video>
      </div>
    </div>
  );
}

export default Header;
