// React
import React, { useState, useRef, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// npm
import { NavHashLink } from 'react-router-hash-link';

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
function useOutsideAlerter(ref) {
    useEffect(()=> {
        function handleClickOuside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                alert ("outside clicked");
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOuside);
        return () => {
            // Unbind event listener on return
            document.removeEventListener("mousedown", handleClickOuside);
        };
    }, [ref]);
}

export default function NavMain() {

    // collapse Navbar on NavHashLink click
    const [expanded, setExpanded] = useState(false);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <Navbar ref={wrapperRef} expanded={expanded} fixed="top" expand="sm" className="header custom-animation">
            <Navbar.Brand href="/" className="custom-animation">
                <img 
                    src="/logo_RT.png"
                    width="60"
                    height="60"
                    alt="logo_RT"
                />
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="custom-animation" id="nav-main">
            <Nav className="ml-auto custom-animation">
                <NavHashLink
                    to="/#recent-projects"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    onClick={() => setExpanded(false)}
                >
                    Recent Projects
                </NavHashLink>
                <NavHashLink
                    to="/#past-projects"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    onClick={() => setExpanded(false)}
                >
                    Past Projects
                </NavHashLink>
                <NavHashLink
                    to="/#about"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    onClick={() => setExpanded(false)}
                >
                    About
                </NavHashLink>
                <NavHashLink
                    to="/#contact"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    onClick={() => setExpanded(false)}
                >
                    Contact
                </NavHashLink>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )   
}