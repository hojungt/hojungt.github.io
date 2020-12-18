// React
import React from 'react';

// images
// import main from '../../images/project_125greenwich.jpg';
// import render from '../../images/125Greenwich_render.jpg';
// import sketch from '../../images/125Greenwich_scan-section.png';

export default function Greenwich() {

    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="greenwich">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">125 Greenwich Street</h1>

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
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            {/* <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="gc_image-gif"
                                            /> */}
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <p className="detail">
                                                A high-end residential skyscraper located in World Trade Center, 125 Greenwich Street has a crowning triplex of amenities 85 stories above ground, offering captivating views and stylish living for its residents.
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
                                                During the design and planning of this project, the marketing strategy for this complex was changed to fit its target demographic. The client wished to offer an exclusive amenity experience on the top floors while being able to maintain the same amount of sellable apartment units. Our team at Rafael Vinoly Architects was met with the task of redesigning the building to meet the client’s new needs.
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
                                                As an architectural designer on this team, I was met with many challenges:
                                            </p>
                                            <ul className="detail">
                                                <li>Redesigning the both the building exterior and interior for the podium and penthouse floors.</li>
                                                <li>Testing and modifying loft apartment units for an optimized apartment plan and coordinating with the engineering teams to maximize salable square footage while verifying legality with building-code consultants.</li>
                                                <li>Designing amenity programs for an immersive experience by collaborating with interior designers on material selection and researching methods to resolve engineering conflicts.</li>
                                                <li>Guiding the internal team though a fast-paced schedule and communicating with the lead architect, clients, and marketing professionals.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <div className="mt-3 mb-3" align="center">
                                                <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://www.125greenwich.com/"><i className="fas fa-globe"></i>&nbsp;website (official)</a>
                                                <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://vinoly.com/works/125-greenwich-street/"><i className="fas fa-globe"></i>&nbsp;website (architect)</a>
                                            </div>
                                        </div>
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
    )
}