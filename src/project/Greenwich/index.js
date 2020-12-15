// React
import React from 'react';

// images
// import main from '../../images/project_125greenwich.jpg';
// import render from '../../images/125Greenwich_render.jpg';
// import sketch from '../../images/125Greenwich_scan-section.png';

export default function Greenwich() {

    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="greenwich">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">125 Greenwich Street</h1>
                        <div className="mt-3 mb-3" align="center">
                            <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://www.125greenwich.com/"><i className="fas fa-globe"></i>&nbsp;website (official)</a>
                            <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://vinoly.com/works/125-greenwich-street/"><i className="fas fa-globe"></i>&nbsp;website (architect)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}