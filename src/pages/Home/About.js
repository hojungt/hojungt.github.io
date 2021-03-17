// React
import React from "react";

// assets
import image from "../../images/rachael-tseng.png";
import resume from "../../pdf/Resume_Rachael-Tseng.pdf";

export default function About() {
    return (
        <div id="about">
            <div className="container">
                <h1 className="main">
                    About
                </h1>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <img 
                            src={image} 
                            alt="rachael-tseng" 
                            className="img-fluid"
                            id="img-profile"
                        />
                    </div>
                    <div className="col-12 col-md-7">
                        <p className="about">
                            Before web development, I specialized in architecture and residential design. 
                            My experience has taught me to design with people's behavior and emotions in mind.
                        </p>
                        <p className="about">
                            I code to create useful and meaningful projects for our daily lives. 
                            Beyond exploring creativity in the digital environment, 
                            I strive to empathize with users' needs and challenges in search of better solutions.
                        </p>
                        
                        <a className="btn contact" href={resume} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-file-download"></i>&nbsp;Resume
                        </a>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}