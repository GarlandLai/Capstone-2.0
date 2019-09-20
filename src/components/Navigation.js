import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

function Navigation() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
    <NavLink to="/relax" className="nav-link">Relax</NavLink>
    <NavLink to="/learn" className="nav-link"> Learn</NavLink>
    </Nav>
    </Navbar>
    </div>
  );
}

export default Navigation;
