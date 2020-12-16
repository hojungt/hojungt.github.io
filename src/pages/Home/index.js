// React
import React, { useEffect } from 'react';

// Sections
import Main from '../../section/Main';
import Recent from '../../section/RecentProjects';
import Past from '../../section/PastProjects';
import About from '../../section/About';
import Contact from '../../section/Contact';

// Components
import Footer from '../../components/Footer';

// npm
import smoothscroll from "smoothscroll-polyfill";

export default function Home() {
    
    useEffect(() => {
        smoothscroll.polyfill();
    });
    
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