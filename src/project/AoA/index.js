// React
import React from "react";

// images
import cover from "../../images/project_531aoa.jpg";

export default function AoA() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="aoa">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">101 West 14th Street</h1>

                        <div id="carousel-detail-aoa" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-aoa" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-aoa" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-aoa" data-slide-to="2"></li>
                                <li data-target="#carousel-detail-aoa" data-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="project_531aoa"
                                            />
                                            <p className="caption">Rendering by ODA Architecture</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <p className="detail">
                                                A distinctive residential complex built on a busy intersection in Chelsea, Manhattan, 101 W 14th St. aims to be an eye-catching sight. Instead of stacked and uniform apartment units, the client wanted to provide a unique living experience to residents.
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
                                                Due to the unique and non-conformist nature of the project, our project team needed to design each individual unit separately to meet the requests of the client while still adhering to construction conventions. This process required a large amount of customization and heavy documentation on similar modules.
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
                                                The planning and design of this project presented me with a variety of challenges:
                                            </p>
                                            <ul className="detail">
                                                <li>Creating reusable 3D models from scratch with Building Information Modeling (BIM) to meet the unique and individualized needs of the project.</li>
                                                <li>Learning how to use Revit and establishing a Revit Library for the company in order to define adjustable parameters and provide construction details for reusability.</li>
                                                <li>Coordinating with architects, interior designers, engineers, and the client in a fast-paced work environment.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                                            <div className="mt-3 mb-3" align="center">
                                                <a className="btn description" target="_blank" rel="noopener noreferrer" href="https://101west14th.com/"><i className="fas fa-globe"></i>&nbsp;website (official)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-aoa" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-aoa" role="button" data-slide="next">
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