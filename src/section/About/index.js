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

                                <a href="#recent-work" className="btn">Download Resume</a>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h2>Skills</h2>
                                <i className="devicon-javascript-plain"></i>
                                <i className="devicon-html5-plain-wordmark"></i>
                                <i className="devicon-css3-plain-wordmark"></i>
                                <i className="devicon-bootstrap-plain-wordmark"></i>

                                <i className="devicon-react-original-wordmark"></i>
                                <i className="devicon-nodejs-plain"></i>
                                <i className="devicon-mongodb-plain-wordmark"></i>
                                <i className="devicon-heroku-original-wordmark"></i>

                                <i className="devicon-illustrator-line"></i>
                                <i>axure </i>
                                <i>revit </i>
                                <i>autocad </i>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}