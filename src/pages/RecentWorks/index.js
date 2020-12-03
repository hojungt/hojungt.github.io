// React
import React from 'react';

// Sections
import Groundcycle from '../../project/Groundcycle';
import Questgiver from '../../project/Questgiver';
import SomethingBorrowed from '../../project/SomethingBorrowed';

// Components
import Footer from '../../components/Footer';

export default function RecentWorks() {
    return (
        <div className="container-parent detail">
            <Groundcycle />
            <Questgiver />
            <SomethingBorrowed />
            <Footer />                
        </div>
    )
}