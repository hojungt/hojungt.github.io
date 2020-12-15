// React
import React from 'react';

// Sections
import AoA from '../../project/AoA';
import Drawing from '../../project/Drawing';
import Greenwich from '../../project/Greenwich';
import Photography from '../../project/Photography';
import SpaFinder from '../../project/SpaFinder';
import Thesis from '../../project/Thesis';

// Components
import Footer from '../../components/Footer';

export default function Past() {
    return (
        <div className="container-parent detail">
            <Greenwich />
            <AoA />
            <SpaFinder />
            <Thesis />
            <Drawing />
            <Photography />
            <Footer />                
        </div>
    )
}