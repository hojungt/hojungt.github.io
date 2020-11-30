// React
import React from "react";

export default function Contact() {
    return (
        <div className="img-bg-contact container-child">
            <div className="container h-100" id="contact">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6">
                                <h2>Let's work together!</h2>
                                <p>Reach out with opportunies, to discuss my work, or chat.</p>
                                <a href="mailto:hojungt@gmail.com" className="btn"><i className="fab fa-telegram-plane"></i>&nbsp;Get in Touch</a>
                                <a href="#recent-work" className="btn"><i className="fas fa-file-download"></i>&nbsp;Resume</a>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="section-quote">
                                    <p className="quote">
                                        "From basic questions to granular details, Rachael provided clear explanations and suggested valuable solutions for the new web service. I appreciate her intellect and skills as well as her friendly personality."
                                    </p>
                                    <p className="name">
                                        - Juyoun H., Partner, A.I. Fairness & Data Privacy Litigation
                                    </p>
                                </div>
                                <div className="section-quote">
                                    <p className="quote">
                                        " It is Rachael’s ability to balance both the nuances of creative interpretation and the practical problem solving of design production that make her someone any client would be excited to work with."
                                    </p>
                                    <p className="name">
                                        - Jared V., Interior Designer, Beyer Blinder Belle
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