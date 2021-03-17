// React
import React, { useState, useRef, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// npm
import { NavHashLink } from 'react-router-hash-link';

export default function NavMain() {

    // collapse Navbar on NavHashLink click
    const [expanded, setExpanded] = useState(false);

    // https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)){
            // inside click
            return;
        }
        // outisde click
        setExpanded(false);
    }

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function called when unmounted, add empty array
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <Navbar ref={node} expanded={expanded} fixed="top" expand="sm" className="custom-animation">
            <Navbar.Brand href="/" className="custom-animation">
                Rachael Tseng
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="custom-animation" id="nav-main">
            <Nav className="ml-auto custom-animation">
                <NavHashLink
                    smooth to="/#work"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    onClick={() => setExpanded(false)}
                >
                    Work
                </NavHashLink>
                <NavHashLink
                    smooth to="/#about"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    onClick={() => setExpanded(false)}
                >
                    About
                </NavHashLink>
                <NavHashLink
                    smooth to="/#contact"
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