// React
import React from "react";

export default function About() {
    return (
        <div className="img-bg-about container-child">
            <div className="container h-100" id="about">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-7">
                                <h2>About me</h2>
                                <div className="section-about">
                                    <p className="about">
                                        Before becoming a web developer, I specialized in residential design.
                                        This experience has taught me my design impact on people's behavior and emotion. It prompts me to always approach design with empathy and pursue better solutions.
                                        <br />
                                    </p>
                                    <p className="about">
                                        To expand my creativity beyond the physical medium, I transitioned into coding. 
                                        Explore possibilities in design beyond the physical medium.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h2>Skills</h2>
                                <div className="mb-4">
                                    <div className="row justify-content-center align-items-center">
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
                                    </div>
                                    <div className="row justify-content-center align-items-center">
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
                                            <i className="skill fab fa-sketch"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="skill devicon-illustrator-line"></i>
                                        </div>
                                        {/* <div className="col-2">
                                            <i className="skill fab fa-figma"></i>
                                        </div> */}
                                    </div>
                                </div>
                                <h2>Experience</h2>
                                <p>Architectural Designer & Revit Specialist | Whitehall Interiors</p>
                                <p>Architectural Designer | Rafael Vinoly Architects</p>
                                <h2>Credentials</h2>
                                <p>Front End Web Development Certificate | Columbia University</p>
                                <p>Bachelor of Architecture | Cornell University</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}