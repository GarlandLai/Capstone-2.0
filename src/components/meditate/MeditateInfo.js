import React from 'react';
import { Link } from 'react-scroll';
import styled from "styled-components";

const MeditationContainer = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  padding-top: 275px;
  padding-left: 200px;
  height: 800px;
  background-repeat:no-repeat;
  background-size: cover;
`;

const StyledButton = styled.button`
  padding: 15px 20px;
`;

function MeditateInfo() {
  return (
    <MeditationContainer id="meditateInfo">
     <h1>Ready for a shift in your life?</h1>
     <h2>Meditation can help:</h2>
     <br/>
     <ul>
      <li>Reduce stress and anxiety levels</li>
       <li>Promotes Emotional and physical health</li>
       <li>Enhance self-awareness and growth</li>
     </ul>
      <StyledButton>
        <Link activeClass="active"
          to="meditate"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>
          Get Started!
        </Link>
     </StyledButton>
    </MeditationContainer>
  );
}

export default MeditateInfo;
