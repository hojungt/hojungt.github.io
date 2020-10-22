// React
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// Content
import Tile from '../Tile';
import Story from '../../pages/Story';

// Components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../../components/Footer';
import MainNavbar from '../../components/MainNavbar';

class Home extends React.Component {
   
    constructor(props) {
        
        // initial state for content switch
        super(props);
        this.state = {
            isStory: true,
            isTile: false,
        };
        // bind
        this.handleStory = this.handleStory.bind(this);
        this.handleTile = this.handleTile.bind(this);
    }

    handleStory() {
        this.setState({ 
            isStory: true,
            isTile: false,
        })
    }

    handleTile() {
        this.setState({ 
            isStory: false,
            isTile: true,
        })
    }

    render() {
        // set consts for state change
        const isStory = this.state.isStory;
        const isTile = this.state.isTile;
        
        return (
            <div className="page-container">

                <MainNavbar 
                    onClick={()=> this.handleTile()}
                />

                {/* Page Content */}
                {isStory ? <Story /> : <Tile />}
                
                <Footer />

            </div>
        );
    }
}

export default Home;