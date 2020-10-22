// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function MainNavbar(props) {
    return (
        <Navbar sticky="top" expand="lg" className="justify-content-center">
            <Nav.Link 
                onClick={()=> props.onClick()}
                className="nav-icon"
            >
                {props.value}
                <i class="fas fa-align-justify"></i>
            </Nav.Link>
            <Nav.Link 
                onClick={()=> props.onClick()}
                className="nav-icon"
            >
                {props.value}
                <i class="fas fa-th-large"></i>
            </Nav.Link>
        </Navbar>
    )   
}

export default MainNavbar;