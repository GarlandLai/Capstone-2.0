import React from 'react';
import water from '../images/waterfall.mp4';

function Header() {
  const headerStyle = {
    fontSize: "120px",
    textShadow: "7px 7px 7px darkGrey"
  }
  const paraStyle = {
    fontSize: "30px",
    paddingBottom: "15px",
    fontStyle: "italic",
  }

  return (
    <div>
      <div className="jumbotron">
        <h1 style={headerStyle}>Ziai</h1>
        <p style={paraStyle}>Improving your life one moment at a time</p>
      <video className='responsive-video' autoPlay muted loop>
        <source src={water} type='video/mp4'/>
      </video>
      </div>
    </div>
  );
}

export default Header;
