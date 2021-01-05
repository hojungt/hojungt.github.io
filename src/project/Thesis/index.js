// React
import React from "react";

// images
import cover from "../../images/other_thesis.jpg";
import photo from "../../images/thesis_photo-final-review.jpeg";
import sketch from "../../images/thesis_sketch.png";
import concept from "../../images/thesis_concept-map.jpg";
import diagram02 from "../../images/thesis_diagram-production-process.png";
import diagram01 from "../../images/thesis_diagram-scale.png";

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
                                <li data-target="#carousel-detail-thesis" data-slide-to="4"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="other_thesis"
                                            />
                                            <p className="caption">Project installation. Photograph by Henry Chuang</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                An unfamiliar form of memorial, <b>Encounter Machine</b> is a product of behavioral design that questions our relationship with chickens, a species that is not human and a species we consume. The project entails creating a farm-like structure that can be easily installed anywhere in the world. Using the attended university as a prototype, a one-to-one scale installation was built in the department’s main hallway.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={diagram01}
                                                className="d-block w-100"
                                                alt="thesis_diagram"
                                            />
                                            <p className="caption">Diagram - A chicken's living space in human scale</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                For centuries, we domesticated chickens as our one major source of protein. With technological advancement and rise of the global consumer market, we put chickens into unimaginable and horrific conditions where they live to merely survive. Intensive farming system has been a major topic of heated debate in regards to protecting our environment and morals, but the conflicts in our needs are far from being resolved. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-4 col-lg-4">
                                            <img 
                                                src={concept}
                                                className="d-block w-100"
                                                alt="thesis_concept-map"
                                            />
                                            <p className="caption">Diagram - Roadmap on definition of a memorial</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                                            <img 
                                                src={diagram02}
                                                className="d-block w-100 frame"
                                                alt="thesis_diagram-production-process"
                                            />
                                            <p className="caption">Diagram - Production process of intensive farming system</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={sketch}
                                                className="d-block w-100"
                                                alt="thesis_sketch"
                                            />
                                            <p className="caption">Sketches - Installation concept and method</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                            The color for Encounter Machine resembles the comb of a chicken, an exclusive feature to its species. The framework of this structure is constructed similarly to a wall tent frame. The color tarp drapes not from the peak of frame but at an offsetting distance, leaving a light gap along the spine of the entire structure. The total footprint of this structure is determined as the following: the amount of chickens consumed in one day by the chosen location’s population times the allowed living space of a chicken in an intensive farming system.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={photo}
                                                className="d-block w-100"
                                                alt="thesis_photo-final-review"
                                            />
                                            <p className="caption">Final installation. Photograph by William Staffeld</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
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