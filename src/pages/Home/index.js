// React
import React from 'react';

// Sections
import Main from '../../section/Main';
import RecentWork from '../../section/RecentWork';
import SelectedWork from '../../section/SelectedWork';
import About from '../../section/About';
import Contact from '../../section/Contact';

// Projects
import AoA from '../../project/AoA';
import Drawing from '../../project/Drawing';
import Greenwich from '../../project/Greenwich';
import Groundcycle from '../../project/Groundcycle';
import Questgiver from '../../project/Questgiver';
import SomethingBorrowed from '../../project/SomethingBorrowed';
import SpaFinder from '../../project/SomethingBorrowed';
import Thesis from '../../project/Thesis';
import Photography from '../../project/Photography';

// Components
import NavMain from '../../components/NavMain';
import Footer from '../../components/Footer';

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

    handlePageChange = (event) => {
        this.setState({
            pageView: event,
            contentDisplay: true,
        })
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
            default: return ;
        }
    }

    render() {

        const isContentDisplay = this.state.contentDisplay;

        return (
            <div className="container-page">

                <NavMain />

                <Main />
                <RecentWork />
                <SelectedWork />
                <About />
                <Contact />

                { isContentDisplay ? this.renderSwitch() : null }

                { console.log(this.state.navView) }
                { console.log(this.state.pageView) }
                
                <Footer />

            </div>
        );
    }
}

export default Home;