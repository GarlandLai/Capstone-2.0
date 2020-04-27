import React from 'react';
import { Link } from 'react-scroll';
import { Navbar } from 'react-bootstrap';

function Navigation() {

  const navStyles = {
    fontWeight: "bold",
    textShadow: "2px 7px 3px black",
  }

  return ( 
    <div>
      <Navbar bg="dark" variant="dark">
        <div className="nav-content">
          <ul className="nav-items">
            <li style={navStyles} className="nav-item">
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
            </li>
            <li style={navStyles} className="nav-item">
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
            </li>
            <li style={navStyles} className="nav-item">
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
            </li>
            <li style={navStyles} className="nav-item">
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
            </li>

          </ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;