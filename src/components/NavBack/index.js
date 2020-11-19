// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class NavBack extends React.Component {

    handleBackClick = (param) => (event) => {
        this.props.onSelectPage(param);
        event.preventDefault();
    }

    render() { 

        const dataA = this.props.dataA;

        return (
            <Navbar sticky="top" expand="lg" className="justify-content-center">
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                <Nav.Link
                    onClick={this.handleBackClick(`${dataA}`)}
                    className="nav-icon"
                    id="back"
                >
                    <i className="fas fa-arrow-left"></i>
                </Nav.Link>
            </Navbar>
        )
    }
}

export default NavBack;