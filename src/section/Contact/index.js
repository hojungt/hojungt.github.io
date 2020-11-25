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
                                <p>
                                    "From basic questions to granular details, Rachael provided clear explanations and suggested valuable solutions for the new web service. I appreciate her intellect and skills as well as her friendly personality."
                                    <br />
                                    - Juyoun H., Partner, A.I. Fairness & Data Privacy Litigation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}