import React from 'react';
import styled from "styled-components";

const BannerContainer = styled.div`
  font-weight: bold;
  text-shadow: 4px 4px 8px black 
`;

const StyledLi = styled.p`
  font-size: 18px;

  :hover {
    font-size: 28px;
  }
`;

const H1 = styled.h1`
  font-size: 45px;
  text-decoration: underline;
  padding-bottom: 10px;
`;


function JournalBanner() {
  return (
    <BannerContainer id='journalBanner'>
      <H1>Reflect to jumpstart your goals</H1>
      <StyledLi>Mindfulness to improve self awareness and emotional intelligence</StyledLi>
      <StyledLi>Boost memory, comprehension, and creativity</StyledLi>
      <StyledLi>Improve communication and self-confidence</StyledLi>
      <StyledLi>Release stress and anxiety to improve sleep</StyledLi>
    </BannerContainer>
  );
}

export default JournalBanner;
