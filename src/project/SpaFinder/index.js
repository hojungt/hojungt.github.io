// React
import React from "react";

// images
// import image from "../../videos/vid_gc_test.gif";

export default function SpaFinder() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="spafinder">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">SpaFinder Office</h1>

                        <div id="carousel-detail-spafinder" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-spafinder" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-spafinder" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-spafinder" data-slide-to="2"></li>
                                <li data-target="#carousel-detail-spafinder" data-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            {/* <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="gc_image-gif"
                                            /> */}
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <p className="detail">
                                                {/* spafinder is an innovative compost pickup and produce delivery service founded in response to the pandemic. It was a startup that delivers organic produce to customers who provide their food waste to be used for composting.  */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            {/* <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="gc_image-gif"
                                            /> */}
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <p className="detail">
                                                {/* The company needed a unique web application solution that was able to take and manage orders, delivery routes, and customers. As a web developer on the team, my role was to take their preexisting rudimentary site done in the LAMP stack and improve the UI/UX while converting to the MERN stack. */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            {/* <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="gc_image-gif"
                                            /> */}
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <p className="detail">
                                                {/* The main challenge for this project was to design a modern UI that is intuitive for users while managing the constant changes and needs that befit a new startup: */}
                                            </p>
                                            <ul className="detail">
                                                {/* <li>Designing a user dashboard to help manage subscriptions, orders, and payments through Stripe.</li>
                                                <li>Improving the design, general user flow, and readability of informational pages.</li>
                                                <li>Outlining the redesign and creating a mockup for the team to follow in AxureRP.</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <div className="mt-3 mb-3" align="center">
                                                <a className="btn description" target="_blank" rel="noopener noreferrer" href="https://triarch.com/2016/02/22/spafinder/"><i className="fas fa-globe"></i>&nbsp;website (architect)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-spafinder" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-spafinder" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}