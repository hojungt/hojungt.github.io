// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class MainNavbar extends React.Component {

    handleClick = (event) => {
        this.props.onSelectPage("");
        event.preventDefault();
    }

    render() {
        return (
            <Navbar sticky="top" expand="lg" className="justify-content-center">
                <Nav.Link
                    onClick={this.handleClick}
                    className="nav-icon"
                >
                    <i class="fas fa-align-justify"></i>
                </Nav.Link>
                <Nav.Link
                    onClick={this.handleClick}
                    className="nav-icon"
                >
                    <i class="fas fa-th-large"></i>
                </Nav.Link>
            </Navbar>
        )   
    }
}

export default MainNavbar;