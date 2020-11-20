// React
import React from "react";
import image from "../../images/rachael-tseng.jpg";

export default function Main() {
    return (
        <div className="img-bg-main">
            <div className="container h-100" id="main">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-5">
                                <h1>Hi, I'm Rachael Tseng,<br />a Front End Web Developer.</h1>
                                <p>Previously an architect, I eat, sleep, and breath to solve wicked design problems.</p>
                            </div>
                            <div className="col-12 col-lg-3" align="center">
                                <img 
                                    src={image} 
                                    alt="rachael-tseng" 
                                    className="img-thumbnail" 
                                    id="img-profile"
                                />
                                <br />
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="http://maps.google.com/?q=Manhattan New York, NY"
                                >
                                    <i className="fas fa-map-marker-alt"></i>&nbsp;New York, NY
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="btn-div-test">
                <a href="#recent-work">
                    <button id="btn-test">
                        View Projects
                    </button>
                </a>
            </div>
        </div>
    )
}