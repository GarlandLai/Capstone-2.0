import React from 'react';
import { Link } from 'react-scroll';
import { Navbar } from 'react-bootstrap';
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
  const StyledList = styled.ul`
    display: inline-flex;
  `;
  const StyledItem = styled.li`
    font-size: 24px;
    font-weight: 600;
    padding: 0 100px;
  `;

  return ( 
    <div>
      {/* <Navbar bg="dark" variant="dark"> */}
        {/* <div className="nav-content"> */}
      <CustomNav>
          <StyledList>
            <StyledItem>
              <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                ZIAI HOME
              </Link>
            </StyledItem>
            <StyledItem>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                ABOUT
              </Link>
            </StyledItem>
            <StyledItem>
              <Link
                activeClass="active"
                to="meditate"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                MEDITATE
              </Link>
            </StyledItem>
            <StyledItem>
              <Link
                activeClass="active"
                to="journals"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
            JOURNALS
              </Link>
            </StyledItem>

          </StyledList>
          </CustomNav>
        {/* </div> */}
      {/* </Navbar> */}
    </div>
  );
}

export default Navigation;