// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class MainNavbar extends React.Component {

    handleNavClick = (param) => (event) => {
        this.props.onSelectPage(param);
        event.preventDefault();
        console.log("clicked");
    }

    render() {
        return (
            <Navbar sticky="top" expand="lg" className="justify-content-center">
                <Nav.Link
                    onClick={this.handleNavClick("story")}
                    className="nav-icon"
                    id="story"
                >
                    <i className="fas fa-align-justify"></i>
                </Nav.Link>
                <Nav.Link
                    onClick={this.handleNavClick("tile")}
                    className="nav-icon"
                    id="tile"
                >
                    <i className="fas fa-th-large"></i>
                </Nav.Link>
            </Navbar>
        )   
    }
}

export default MainNavbar;