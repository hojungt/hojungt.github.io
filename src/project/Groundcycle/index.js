// React
import React from "react";

// images
import image from "../../videos/vid_gc_test.gif";

function Groundcycle() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="groundcycle">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1>Groundcycle</h1>

                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-7">
                                <p>
                                    An innovative compost pickup and produce delivery service. Founded in response to the pandemic, it 
                                </p>
                                <img 
                                    src={image} 
                                    alt="vid-gc-test"
                                    className="img-thumbnail" 
                                />
                                <div>
                                    <a className="btn" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fas fa-code"></i>&nbsp;code</a>
                                    <a className="btn" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fas fa-globe"></i>&nbsp;website</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="overflow-auto" id="scroll-box">
                                    <p>
                                        Transition from LAMP stack to MERN stack, adapt to concurrent web development framework.
                                        Improve UI/UX for readability and user-friendliness; redesign based on existing website.
                                        Create unique user pages, secure checkout process, and subscription payment methods.
                                    </p>
                                    <p>status: in progress</p>
                                    <p>
                                        ReactJS, Bootstrap<br />
                                        ExpressJS, MongoDB, NodeJS, BcryptJS, Stripe<br />
                                        AxureRP, Figma
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* detail content controls here */}
            <div id="btn-div-main">
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
            </div>
        </div>
    )
}

export default Groundcycle;