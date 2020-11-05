// React
import React from 'react';

// Content
import Tile from '../Tile';
import Story from '../../pages/Story';

import AoA from '../../project/AoA';
import Greenwich from '../../project/Greenwich';
import Groundcycle from '../../project/Groundcycle';
import Questgiver from '../../project/Questgiver';
import SomethingBorrowed from '../../project/SomethingBorrowed';
import SpaFinder from '../../project/SomethingBorrowed';
import Thesis from '../../project/Thesis';
import Contact from '../../resume/Contact';
import Profile from '../../resume/Profile';
import Skills from '../../resume/Skills';

// Components
import Footer from '../../components/Footer';
import MainNavbar from '../../components/MainNavbar';

class Home extends React.Component {
   
    constructor(props) {
        // initial state for content switch
        super(props);
        this.state = {
            pageView: "story",
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
            case 'story': return <Story onSelectTab={this.handlePageChange}/>;
            case 'tile': return <Tile onSelectCard={this.handlePageChange}/>;
            case 'aoa': return <AoA />;
            case 'greenwich': return <Greenwich />;
            case 'groundcycle': return <Groundcycle />;
            case 'questgiver': return <Questgiver />;
            case 'something-borrowed': return <SomethingBorrowed />;
            case 'spafinder': return <SpaFinder />;
            case 'thesis': return <Thesis />;
            case 'profile': return <Profile />;
            case 'skills': return <Skills />;
            case 'contact': return <Contact />;
            default: return <Story />;
        }
    }

    render() {
        return (
            <div className="container-page">
                <MainNavbar onSelectPage={this.handlePageChange}/>
                { this.renderSwitch() }
                <Footer />
            </div>
        );
    }
}

export default Home;