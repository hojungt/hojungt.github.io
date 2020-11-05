// React
import React from 'react';

// Content
import Tile from '../Tile';
import Story from '../../pages/Story';

// Components
import Footer from '../../components/Footer';
import MainNavbar from '../../components/MainNavbar';

// Projects
// import Groundcycle from '../../project/groundcycle';

class Home extends React.Component {
   
    constructor(props) {
        
        // initial state for content switch
        super(props);
        this.state = {
            pageView: "tile",
        };
        // bind
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange = (event) => {
        this.setState({
            pageView: event,
        })
    }

    renderSwitch() {
        switch (this.state.pageView) {
            case 'story':
                return <Story />;
            case 'tile':
                return <Tile />;
            default:
                return <Story />;
        }
    }

    render() {

        return (
            <div className="container-page">

                <MainNavbar 
                    onSelectPage={this.handlePageChange}
                />

                {/* Page View */}
                {this.renderSwitch()}
                
                <Footer />

            </div>
        );
    }
}

export default Home;