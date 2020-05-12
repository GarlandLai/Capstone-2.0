import React from 'react';
import { Link } from 'react-scroll';
import styled from "styled-components";

const CustomNav = styled.div`
background-color: grey;
width: 100vw;
height: 75px;
`;

const StyledList = styled.div`
display: inline-flex;

p {
  padding-top: 20px;
}
`;

function Navigation() {
  const StyledLink = styled(Link)`
    font-size: 24px;
    font-weight: 600;
    padding: 0 100px;
    height: 75px;

    :hover {
      background-color: lightgrey;
    }
  `;

  return ( 
    <div>
      <CustomNav>
          <StyledList>
            <StyledLink
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
              <p>ZIAI HOME</p>
            </StyledLink>
            <StyledLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
              <p>ABOUT</p>
            </StyledLink>
            <StyledLink
              activeClass="active"
              to="meditate"
               spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
              <p>MEDITATE</p>
            </StyledLink>
            <StyledLink
              activeClass="active"
              to="journals"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
            <p>JOURNALS</p>
          </StyledLink>
        </StyledList>
      </CustomNav>
    </div>
  );
}

export default Navigation;