// React
import React from "react";

export default function About() {
    return (
        <div className="img-bg-about">
            <div className="container h-100" id="about">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6">
                                <h2>About me</h2>
                                <p>
                                    I received my Full-Stack Web Development certificate from Columbia University.
                                    <br />
                                    Before becoming a web developer, I was a practicing architect at <b>Rafael Vinoly Architect</b> and <b>Whitehall Interiors</b>, with a Bachelor of Architecture from Cornell University.
                                    <br />
                                    I am now an active member at <b>Interaction Design Foundation</b>, learning UI and UX design.
                                </p>

                                <a href="#recent-work" className="btn"><i className="fas fa-file-download"></i> Download Resume</a>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h2>Skills</h2>
                                <div className="row">
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
                                        <i className="skill devicon-bootstrap-plain-wordmark"></i>
                                    </div>
                                    <div className="col-2">
                                        <i className="skill devicon-react-original-wordmark"></i>
                                    </div>
                                    <div className="col-2">
                                        <i className="skill devicon-nodejs-plain"></i>
                                    </div>
                                </div>
                                <div className="row">
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
                                        <i>(axure)</i>
                                    </div>
                                    <div className="col-2">
                                        <i>(revit)</i>
                                    </div>
                                    <div className="col-2">
                                        <i>(cad)</i>
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