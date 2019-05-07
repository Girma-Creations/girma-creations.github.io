import React from 'react';
import logo from './IB-ProjectsLogo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <img src={logo} className="logo" alt="logo "/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-end">
                <Nav>
                <Nav.Link className="themecolor1">Home</Nav.Link>
                <Nav.Link className="themecolor1"> Projects</Nav.Link>
                <Nav.Link className="themecolor1">Work</Nav.Link>
                <Nav.Link className="themecolor1">About Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;