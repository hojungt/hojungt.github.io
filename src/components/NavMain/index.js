// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class NavMain extends React.Component {

    handleNavClick = (param) => (event) => {
        this.props.onSelectPage(param);
        event.preventDefault();
    }

    render() {

        const dataA = this.props.dataA;

        let isStory = "";
        if ( dataA === "story" ) {
            isStory = true
        } else {
            isStory = false
        }

        return (
            <Navbar sticky="top" expand="lg" className="justify-content-center">
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                { isStory ? 
                    <Nav.Link
                        onClick={this.handleNavClick("tile")}
                        className="nav-icon"
                        id="tile"
                    >
                        <i className="fas fa-th-large"></i>
                    </Nav.Link>
                    : 
                    <Nav.Link
                        onClick={this.handleNavClick("story")}
                        className="nav-icon"
                        id="story"
                    >
                        <i className="fas fa-book-open"></i>
                    </Nav.Link>
                }
            </Navbar>
        )   
    }
}

export default NavMain;