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
                        <h1 className="detail">Groundcycle</h1>

                        <div className="overflow-auto" id="scroll-box">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <img 
                                        src={image} 
                                        alt="vid-gc-test"
                                        className="img-fluid" 
                                    />
                                </div>
                                <div className="col-12 col-lg-4">
                                    <p>
                                        An innovative compost pickup and produce delivery service founded in response to the pandemic. 
                                        The startup delivers organic produce to customers who provide their food waste to be used for composting. 
                                    </p>
                                    <div>
                                        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fas fa-code"></i>&nbsp;code</a>
                                        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fas fa-globe"></i>&nbsp;website</a>
                                        <a className="btn" target="_blank" rel="noopener noreferrer" href="/"><i className="fas fa-globe"></i>&nbsp;wireframe</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    {/* <img 
                                        src={image} 
                                        alt="vid-gc-test"
                                        className="img-fluid" 
                                    /> */}
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p>
                                        Groundcycle was a small startup that needed a unique web application solution that was able to take and manage orders, delivery routes, and customers. 
                                        As a web developer on the team, my role was to take their preexisting rudimentary site done in the LAMP stack and improve the UI/UX while converting to the MERN stack. 
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    {/* <img 
                                        src={image} 
                                        alt="vid-gc-test"
                                        className="img-fluid" 
                                    /> */}
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p>
                                        The main challenge for this project was to design a modern UI that is intuitive for users while managing the constant changes and needs that befit a new startup:
                                    </p>
                                    <ul>
                                        <li>
                                            Designing a user dashboard to help manage subscriptions, orders, and payments through Stripe.
                                        </li>
                                        <li>
                                            Improving the design, general user flow, and readability of informational pages.
                                        </li>
                                        <li>
                                            Outlining the redesign and creating a mockup for the team to follow in AxureRP.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groundcycle;