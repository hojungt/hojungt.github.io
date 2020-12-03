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
                                        Before web development, I specialized in architecture and residential design.
                                        My experience has taught me to design with people's behavior and emotion in mind. 
                                    </p>
                                    <p className="about">
                                        I code to create useful and meaningful projects for our daily lives.
                                        Beyond exploring creativity in the digital environment, 
                                        I wish to empathize with users' needs and challenges, in search for better solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h2>Skills</h2>
                                <div className="section-about mb-4">
                                    <p className="skill">
                                        Tools and technologies I use:
                                    </p>
                                    <div className="test">
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
                                    </div>
                                    <div className="test">
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
                                        </div>
                                    </div>
                                    <p className="skill">
                                        hell ya
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}