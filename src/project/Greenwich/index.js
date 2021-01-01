// React
import React from 'react';

// images
import cover from '../../images/project_125greenwich.jpg';
// import render from '../../images/125Greenwich_render.jpg';
// import sketch from '../../images/125Greenwich_scan-section.png';

export default function Greenwich() {

    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="greenwich">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">125 Greenwich Street</h1>

                        <div id="carousel-detail-greenwich" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-greenwich" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-greenwich" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-greenwich" data-slide-to="2"></li>
                                <li data-target="#carousel-detail-greenwich" data-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="project_125greenwich"
                                            />
                                            <p className="caption">Rendering by March & White Design</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <p className="detail">
                                                A high-end residential skyscraper, 125 Greenwich Street has a crowning triplex of amenities 85 stories above ground. It offers captivating views and stylish living for its residents in the heart of Manhattan’s World Trade Center. 
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
                                                During the design and planning of this project, the marketing strategy for this complex was changed to fit its target demographic. The client wished to offer an exclusive amenity experience on the top floors while maintaining the same amount of sellable apartment units. Our team at Rafael Vinoly Architects was met with the task of redesigning the building to meet the client’s new needs.
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
                                                As an architectural designer, I took on the role of a team lead in this multifaceted redesign and covered various aspects of the project:
                                            </p>
                                            <ul className="detail">
                                                <li>Working directly with the design partner and project manager to reconfigure both building exterior and interior for the podium and penthouse floors.</li>
                                                <li>Collaborating with interior designers and engineers to execute all design intent and resolve mechanical conflict.</li>
                                                <li>Test-fitting units for optimized apartment layouts; researching legality of construction and verifying with building-code consultants.</li>
                                                <li>Guiding the internal team though a fast-paced schedule and communicating with the lead architect, clients, and marketing professionals.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <div className="mt-3 mb-3" align="center">
                                                <a className="btn description" target="_blank" rel="noopener noreferrer" href="https://www.125greenwich.com/"><i className="fas fa-globe"></i>&nbsp;website (official)</a>
                                                <a className="btn description" target="_blank" rel="noopener noreferrer" href="https://vinoly.com/works/125-greenwich-street/"><i className="fas fa-globe"></i>&nbsp;website (architect)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-greenwich" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-greenwich" role="button" data-slide="next">
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