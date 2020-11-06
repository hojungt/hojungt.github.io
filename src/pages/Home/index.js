// React
import React from 'react';

// Content
import Tile from '../Tile';
import Story from '../../pages/Story';

import AoA from '../../project/AoA';
import Drawing from '../../project/Drawing';
import Greenwich from '../../project/Greenwich';
import Groundcycle from '../../project/Groundcycle';
import Questgiver from '../../project/Questgiver';
import SomethingBorrowed from '../../project/SomethingBorrowed';
import SpaFinder from '../../project/SomethingBorrowed';
import Thesis from '../../project/Thesis';
import Contact from '../../resume/Contact';
import Photography from '../../project/Photography';
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
            navView: "story",
            pageView: "",
            contentDisplay: false,
        };
        // bind
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handleNavChange = (event) => {
        this.setState({
            navView: event,
            pageView: "",
            contentDisplay: false,
        })
    }

    handlePageChange = (event) => {
        this.setState({
            pageView: event,
            contentDisplay: true,
        })
    }

    navSwitch() {
        switch (this.state.navView) {
            case 'story': return <Story onSelectTab={this.handlePageChange}/>;
            case 'tile': return <Tile onSelectCard={this.handlePageChange}/>;
            default: return <Story />;
        }
    }

    renderSwitch() {
        switch (this.state.pageView) {
            case 'aoa': return <AoA />;
            case 'drawing': return <Drawing />;
            case 'greenwich': return <Greenwich />;
            case 'groundcycle': return <Groundcycle />;
            case 'questgiver': return <Questgiver />;
            case 'something-borrowed': return <SomethingBorrowed />;
            case 'spafinder': return <SpaFinder />;
            case 'thesis': return <Thesis />;
            case 'photography': return <Photography />;
            case 'profile': return <Profile />;
            case 'skills': return <Skills />;
            case 'contact': return <Contact />;
            default: return ;
        }
    }

    render() {

        const isContentDisplay = this.state.contentDisplay;
        return (
            <div className="container-page">
                <MainNavbar onSelectPage={this.handleNavChange}/>

                { isContentDisplay ? this.renderSwitch() : this.navSwitch() }

                { console.log(this.state.navView) }
                { console.log(this.state.pageView)}
                <Footer />
            </div>
        );
    }
}

export default Home;