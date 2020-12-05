// React
import React from "react";

export default function Contact() {
    return (
        <div className="img-bg-contact container-child">
            <div className="container h-100" id="contact">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center mb-4" align="center">
                            <div className="col-12 col-lg-12">
                                <h1>Let's work together!</h1>
                                <p className="contact">Reach out with opportunies, to discuss my work, or just chat.</p>
                                <a className="btn contact" href="mailto:hojungt@gmail.com">
                                    <i className="fab fa-telegram-plane"></i>&nbsp;Email me
                                </a>
                                <a className="btn contact" href="https://drive.google.com/file/d/1yb7hlqeTeqGMcrZBbnrv__EERhBnLk5O/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-file-download"></i>&nbsp;Resume
                                </a>
                            </div>
                        </div>
                        <hr className="hr-custom"/>

                        <div className="row justify-content-center" align="center">
                            <div className="col-12 col-lg-12">
                            <p className="contact">What my recommenders say about me:</p>
                                <div id="carousel-recommendations" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="section-quote">
                                                <p className="quote">
                                                    <i className="fas fa-quote-left"></i>&nbsp;From basic questions to granular details, Rachael provided clear explanations and suggested valuable solutions for the new web service. I appreciate her intellect and skills as well as her friendly personality.&nbsp;<i className="fas fa-quote-right"></i>
                                                </p>
                                                <p className="name">
                                                    Juyoun Han, Partner
                                                    <br />
                                                    A.I. Fairness & Data Privacy Litigation
                                                </p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="section-quote">
                                                <p className="quote">
                                                    <i className="fas fa-quote-left"></i>&nbsp;It is Rachael’s ability to balance both the nuances of creative interpretation and the practical problem solving of design production that make her someone any client would be excited to work with.&nbsp;<i className="fas fa-quote-right"></i>
                                                </p>
                                                <p className="name">
                                                    Jared Vanlandingham, Interior Designer
                                                    <br />
                                                    Beyer Blinder Belle Architects & Planners
                                                </p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="section-quote">
                                                <p className="quote">
                                                    <i className="fas fa-quote-left"></i>&nbsp;Rachael is patient, knowledgeable, organized and adds tons of value to the team. She’s extremely detail oriented and shows great interest and care for the projects she’s involved in.&nbsp;<i className="fas fa-quote-right"></i>
                                                </p>
                                                <p className="name">
                                                    Vivian Lin, Founder
                                                    <br />
                                                    Groundcycle
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel-recommendations" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-recommendations" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}