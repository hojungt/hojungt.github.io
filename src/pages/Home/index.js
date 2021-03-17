// React
import React, { useEffect } from 'react';

// Sections
import Main from './Main';
import SelectedWork from './SelectedWork';
import OtherWork from './/OtherWork';
import About from './About';
import Contact from './Contact';

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
            <SelectedWork />
            <OtherWork />
            <About />
            <Contact />
            <Footer />                
        </div>
    );
}