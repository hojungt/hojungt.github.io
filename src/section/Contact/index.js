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
                                <a href="mailto:hojungt@gmail.com" className="btn"><i className="fab fa-telegram-plane"></i>&nbsp;Get in Touch</a>
                                <a href="#recent-work" className="btn"><i className="fas fa-file-download"></i>&nbsp;My Resume</a>
                            </div>
                        </div>
                        <hr className="hr-custom"/>

                        <div className="row justify-content-center" align="center">
                            <div className="col-12 col-lg-12">
                            <p className="contact">What my recommenders say about me:</p>
                                <div id="carousel-recommendations" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
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
                                        <div class="carousel-item">
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
                                        <div class="carousel-item">
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
                                    <a class="carousel-control-prev" href="#carousel-recommendations" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel-recommendations" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
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