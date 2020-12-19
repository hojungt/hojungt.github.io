// React
import React from "react";

// images
import cover from "../../images/other_thesis.jpg";

export default function Thesis() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="thesis">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">Encounter Machine: Chicken Memorial</h1>

                        <div id="carousel-detail-thesis" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-thesis" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-thesis" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-thesis" data-slide-to="2"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="other_thesis"
                                            />
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <p className="detail">
                                                Chicken is the subject of this unfamiliar memorial for more than their distinctive nature: it questions our relationship with a species that is not human, especially a species we consume. For centuries, we domesticated chickens as our one major source of protein; with the advancement of technology and rising market, we put these lives into unimaginably horrific conditions to merely survive. Intensive farming systems have been a major topic of heated debate in regards to our environment and morals, but the conflicts in our needs are far from being resolved. 
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
                                                Quantifying our consumption in space, the installation recreates an experience to occupy both tangible reality and conceptual awareness. It reaches toward the heart of the problem by asking ourselves what these lives really mean to us. Radically imposing the lost value of these lives, the project challenges the capacity of architecture as a medium to force us see and feel differently.
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
                                                The installation is made with the following:
                                            </p>
                                            <ul className="detail">
                                                {/* <li>Designing a user dashboard to help manage subscriptions, orders, and payments through Stripe.</li>
                                                <li>Improving the design, general user flow, and readability of informational pages.</li>
                                                <li>Outlining the redesign and creating a mockup for the team to follow in AxureRP.</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-thesis" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-thesis" role="button" data-slide="next">
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