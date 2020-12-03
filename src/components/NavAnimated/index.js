// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// npm
import { NavHashLink } from 'react-router-hash-link';

class NavMain extends React.Component {

    render() {
        return (
            <Navbar fixed="top" expand="sm" className="header custom-animation">
                <Navbar.Brand href="/" className="custom-animation">
                    <img 
                        src="/logo_RT.png"
                        width="60"
                        height="60"
                        alt="logo_RT"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="custom-animation" id="nav-main">
                <Nav className="ml-auto custom-animation">

                    <NavHashLink
                        to="/#recent-work"
                        className="nav-icon"
                    >
                        Recent Work
                    </NavHashLink>
                    <NavHashLink
                        to="/#selected-work"
                        className="nav-icon"
                    >
                        Selected Work
                    </NavHashLink>
                    <NavHashLink
                        to="/#about"
                        className="nav-icon"
                    >
                        About
                    </NavHashLink>
                    <NavHashLink
                        to="/#contact"
                        className="nav-icon"
                    >
                        Contact
                    </NavHashLink>

                    {/* <Nav.Link
                        className="nav-icon"
                        href="/#recent-work"
                    >
                        Recent Work
                    </Nav.Link>
                    <Nav.Link
                        className="nav-icon"
                        href="/#selected-work"
                    >
                        Selected Work
                    </Nav.Link>
                    <Nav.Link
                        className="nav-icon"
                        href="/#about"
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        className="nav-icon"
                        href="/#contact"
                    >
                        Contact
                    </Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )   
    }
}

export default NavMain;