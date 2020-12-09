// React
import React from 'react';

// Sections
import Main from '../../section/Main';
import Recent from '../../section/RecentProjects';
import Past from '../../section/PastProjects';
import About from '../../section/About';
import Contact from '../../section/Contact';

// Components
import Footer from '../../components/Footer';

export default function Home() {
    
    return (
        <div className="container-parent">
            <Main />
            <Recent />
            <Past />
            <About />
            <Contact />
            <Footer />                
        </div>
    );
}