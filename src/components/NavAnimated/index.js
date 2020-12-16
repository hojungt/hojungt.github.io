// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// npm
import { NavHashLink } from 'react-router-hash-link';

class NavMain extends React.Component {

    render() {
        return (
            <Navbar expand="sm" className="header custom-animation">
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
                        to="/#recent-projects"
                        className="nav-link"
                        activeClassName="nav-link-active"
                    >
                        Recent Projects
                    </NavHashLink>
                    <NavHashLink
                        to="/#past-projects"
                        className="nav-link"
                        activeClassName="nav-link-active"
                    >
                        Past Projects
                    </NavHashLink>
                    <NavHashLink
                        to="/#about"
                        className="nav-link"
                        activeClassName="nav-link-active"
                    >
                        About
                    </NavHashLink>
                    <NavHashLink
                        to="/#contact"
                        className="nav-link"
                        activeClassName="nav-link-active"
                    >
                        Contact
                    </NavHashLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )   
    }
}

export default NavMain;