// React
import React from "react";

export default function Contact() {
    return (
        <div className="img-bg-contact">
            <div className="container h-100" id="contact">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-12">
                                <h2>Let's work together!</h2>
                                <h3>email me</h3>
                                <a className="footer" href="mailto:hojungt@gmail.com"><i className="fab fa-telegram-plane"></i> hojungt@gmail.com</a>

                                <h3>follow me</h3>
                                <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fab fa-github"></i> hojungt</a>
                                <a className="footer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rachael-ho-jung-tseng/"><i className="fab fa-linkedin"></i> Rachael Tseng</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}