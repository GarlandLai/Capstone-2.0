import React from 'react';
import { Link } from 'react-scroll';
import styled from "styled-components";

function Navigation() {
  // const navStyles = {
  //   fontWeight: "bold",
  //   textShadow: "2px 7px 3px black",
  // }

  const CustomNav = styled.div`
    background-color: grey;
    width: 100vw;
    height: 75px;

  `;
  const StyledList = styled.div`
    display: inline-flex;
    padding-top: 20px;
  `;
  // const StyledItem = styled.li`
  //   // height: 75px;

  //   :hover {
  //     background-color: lightgrey;
  //   }
  // `;

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
      {/* <Navbar bg="dark" variant="dark"> */}
        {/* <div className="nav-content"> */}
      <CustomNav>
          <StyledList>
            {/* <StyledItem> */}
              <StyledLink
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                ZIAI HOME
              </StyledLink>
            {/* </StyledItem> */}
            {/* <StyledItem> */}
              <StyledLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                ABOUT
              </StyledLink>
            {/* </StyledItem> */}
            {/* <StyledItem> */}
              <StyledLink
                activeClass="active"
                to="meditate"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                MEDITATE
              </StyledLink>
            {/* </StyledItem> */}
            {/* <StyledItem> */}
              <StyledLink
                activeClass="active"
                to="journals"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
            JOURNALS
              </StyledLink>
            {/* </StyledItem> */}

          </StyledList>
          </CustomNav>
        {/* </div> */}
      {/* </Navbar> */}
    </div>
  );
}

export default Navigation;