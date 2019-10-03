import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-scroll'

function Navigation() {
  return ( 
    <div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration= {500}>Home</Link>
      <Link activeClass="active" to="journals" spy={true} smooth={true} offset={-70} duration= {500}>Journals</Link>
    </Nav>
    </Navbar>
    </div>
  );
}

export default Navigation;
