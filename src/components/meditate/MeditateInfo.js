import React from 'react';
import { Link } from 'react-scroll';

function MeditateInfo() {

  const MeditationStyles = {
    fontWeight: "bold",
    fontSize: "18px"
  }
  return (
    <div style={MeditationStyles} id='meditateInfo'>
      <h1>Ready for shift in your life?</h1>
      <h2>Meditation can:</h2>
      <ul>
        <li>Reduce stress and anxiety levels</li>
        <li>Promotes Emotional and physical health</li>
        <li>Enhance self-awareness and growth</li>
      </ul>
      <button className="btn btn-danger"><Link
                activeClass="active"
                to="meditate"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Get Started!
              </Link></button>
    </div>
  );
}

export default MeditateInfo;
