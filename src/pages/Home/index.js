// React
import React from 'react';

// Sections
import Main from '../../section/Main';
import RecentWork from '../../section/RecentWork';
import SelectedWork from '../../section/SelectedWork';
import About from '../../section/About';
import Contact from '../../section/Contact';

// Components
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

    render() {
        return (
            <div className="container-parent">
                <Main />
                <RecentWork />
                <SelectedWork />
                <About />
                <Contact />
                <Footer />                
            </div>
        );
    }
}

export default Home;