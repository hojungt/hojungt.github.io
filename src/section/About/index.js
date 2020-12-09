// React
import React from "react";

export default function About() {
    return (
        <div className="img-bg-about container-child">
            <div className="container h-100" id="about">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6">
                                <div className="h-100">
                                    <h2 className="about">About me</h2>
                                    <div className="section-about">
                                        <p className="about">
                                            Before web development, I specialized in architecture and residential design. 
                                            My experience has taught me to design with people's behavior and emotions in mind.
                                        </p>
                                        <p className="about">
                                            I code to create useful and meaningful projects for our daily lives. 
                                            Beyond exploring creativity in the digital environment, 
                                            I strive to empathize with users' needs and challenges in search of better solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5">
                                <div className="h-100">
                                    <h2 className="about">Skills & Experience</h2>
                                    <div className="section-about">
                                        <h3 className="skill">
                                            Tools and technologies
                                        </h3>
                                        <div className="row justify-content-center mb-2" align="center" id="div-skill">
                                            <div className="col-2">
                                                <i className="skill devicon-javascript-plain"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-html5-plain-wordmark"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-css3-plain-wordmark"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-react-original-wordmark"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-bootstrap-plain-wordmark"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-nodejs-plain"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-mongodb-plain-wordmark"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-heroku-original-wordmark"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-illustrator-line"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill devicon-photoshop-line"></i>   
                                            </div>
                                            <div className="col-2">
                                                <i className="skill fab fa-sketch"></i>
                                            </div>
                                            <div className="col-2">
                                                <i className="skill fab fa-figma"></i>
                                            </div>
                                        </div>
                                        <h3 className="skill">
                                            Work Experience
                                        </h3>
                                        <p className="skill">
                                            Front-End Web Developer | Groundcycle
                                            <br />
                                            Architectural Designer | Whitehall Interiors
                                            <br />
                                            Architectural Designer | Rafael Vinoly Architects
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}