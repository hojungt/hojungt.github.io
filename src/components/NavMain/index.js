// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class NavMain extends React.Component {

    render() {
        return (
            <Navbar fixed="top" expand="lg">
                <Navbar.Brand href="#">
                    <img 
                        src="/logo_RT.png"
                        width="60"
                        height="60"
                        alt="logo_RT"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="nav-main">
                <Nav className="ml-auto">
                    <Nav.Link
                        className="nav-icon"
                        href="#recent-work"
                    >
                        Recent Work
                    </Nav.Link>
                    <Nav.Link
                        className="nav-icon"
                        href="#selected-work"
                    >
                        Selected Work
                    </Nav.Link>
                    <Nav.Link
                        className="nav-icon"
                        href="#about"
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        className="nav-icon"
                        href="#contact"
                    >
                        Contact
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )   
    }
}

export default NavMain;