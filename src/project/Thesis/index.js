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
                                <li data-target="#carousel-detail-thesis" data-slide-to="3"></li>
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
                                                An unfamiliar form of memorial, Encounter Machine is a product of behavioral design that questions our relationship with chickens, a species that is not human and a species we consume. The project entails creating a farm-like structure that can be easily installed anywhere in the world. Using the attended university as a prototype, a one-to-one scale installation was built in the department’s main hallway.
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
                                                For centuries, we domesticated chickens as our one major source of protein. With technological advancement and rise of the global consumer market, we put chickens into unimaginable and horrific conditions where they live to merely survive. Intensive farming system has been a major topic of heated debate in regards to protecting our environment and morals, but the conflicts in our needs are far from being resolved. 
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
                                            The color for Encounter Machine resembles the comb of a chicken, an exclusive feature to its species. The framework of this structure is constructed similarly to a wall tent frame. The color tarp drapes not from the peak of frame but at an offsetting distance, leaving a light gap along the spine of the entire structure. The total footprint of this structure is determined as the following: the amount of chickens consumed in one day by the chosen location’s population times the allowed living space of a chicken in an intensive farming system.
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
                                                Quantifying our consumption in space, Encounter Machine recreates an experience to occupy both tangible reality and conceptual awareness. It reaches into the heart of the problem by asking ourselves what these lives really mean to us. Radically imposing the lost value of these lives, this project challenges the capacity of architecture as a medium to force us see and feel differently.
                                            </p>
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