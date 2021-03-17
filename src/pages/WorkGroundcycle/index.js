// React
import React from "react";

// images
import siteMap from "../../images/groundcycle_site-map.png";
import storySketch from "../../images/groundcycle_story-sketch.PNG";
import storyFinal from "../../images/groundcycle_story-final.gif";
import gif from "../../images/groundcycle_main.gif";
import dashboard from "../../images/groundcycle_dashboard.png";

export default function WorkGroundcycle() {
    return (
        <div className="container-parent detail">
            <div className="img-bg-detail container-child">
                <div className="container h-100" id="groundcycle">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-12">
                            <h1 className="detail">Groundcycle</h1>
                            <div className="mb-3" align="center">
                                {/* <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://groundcycle.herokuapp.com/"><i className="fas fa-globe"></i>&nbsp;website</a> */}
                                <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://rkc5yu.axshare.com/#id=sm217u&p=project_cover"><i className="fas fa-palette"></i>&nbsp;wireframe</a>
                            </div>

                            <div id="carousel-detail-groundcycle" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-detail-groundcycle" data-slide-to="0" className="active"></li>
                                    <li data-target="#carousel-detail-groundcycle" data-slide-to="1"></li>
                                    <li data-target="#carousel-detail-groundcycle" data-slide-to="2"></li>
                                    <li data-target="#carousel-detail-groundcycle" data-slide-to="3"></li>
                                </ol>

                                <div className="carousel-inner">
                                    <div className="carousel-item active h-100">
                                        <div className="row justify-content-center align-items-center h-100">
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <img 
                                                    src={gif}
                                                    className="d-block w-100 frame"
                                                    alt="groundcycle_main"
                                                />
                                            </div>
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <p className="detail">
                                                    <b>Groundcycle</b> is an innovative compost pickup and produce delivery service founded in response to the pandemic. It was a startup that delivers organic produce to customers who provide their food waste to be used for composting. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-100">
                                        <div className="row justify-content-center align-items-center h-100">
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <img 
                                                    src={dashboard}
                                                    className="d-block w-100 frame"
                                                    alt="groundcycle_dashboard"
                                                />
                                                <p className="caption">User dashboard redesign</p>
                                            </div>
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <p className="detail">
                                                    The company needed a unique web application solution that was able to take and manage orders, delivery routes, and customers. As a web developer on the team, my role was to take their preexisting rudimentary site done in the LAMP stack and improve the UI/UX while converting to the MERN stack.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-100">
                                        <div className="row justify-content-center align-items-center h-100">
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <img 
                                                    src={siteMap}
                                                    className="d-block w-100"
                                                    alt="groundcycle_site-map"
                                                />
                                                <p className="caption">Site map - web app structure and user flow</p>
                                            </div>
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <p className="detail">
                                                    The main challenge for this project was to design a modern UI that is intuitive for users while managing the constant changes and needs that befit a new startup:
                                                </p>
                                                <ul className="detail">
                                                    <li>Designing a user dashboard to help manage subscriptions, orders, and payments through Stripe.</li>
                                                    <li>Improving the design, general user flow, and readability of informational pages.</li>
                                                    <li>Outlining the redesign and creating a mockup for the team to follow in AxureRP.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-100">
                                        <div className="row justify-content-center align-items-center h-100">
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <img 
                                                    src={storyFinal}
                                                    className="d-block w-100 frame"
                                                    alt="groundcycle_story-final"
                                                />
                                            </div>
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                                <img 
                                                    src={storySketch}
                                                    className="d-block w-100"
                                                    alt="groundcycle_story-sketch"
                                                />
                                            </div>
                                            <p className="caption">Groundcycle's story - redesigning information as interactive panels</p>
                                        </div>
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#carousel-detail-groundcycle" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-detail-groundcycle" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}