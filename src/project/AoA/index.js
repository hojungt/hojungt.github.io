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
                                                A distinctive complex, 101 W 14th Street is a new residential development at the cusp of Chelsea and Greenwich village in Manhattan. The client wished to deliver a building that both yields extra space and maximizes resident privacy in this busy district. Instead of adapting traditional stacked layouts, the condominium provides each unit a unique layout of its own and a private terrace for a refined living experience. 
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
                                                Due to the non-conformist nature of this project, this project called to design each individual unit separately while adhering to construction conventions. Aside from creating a large amount of customization and various documentation of similar modules, our team at Whitehall Interiors collaborated closely with the rest of the project team on a daily basis. 
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
                                                To guide my team that was new to Building Information Modeling (BIM) system, I acted beyond my role and took on the responsibilities of a Revit manager:
                                            </p>
                                            <ul className="detail">
                                                <li>Categorizing building units per construction requirements; creating 3D models from scratch to meet code and constructability.</li>
                                                <li>Defining adjustable parameters and providing documentational details for reusability.</li>
                                                <li>Establishing modeling standards and libraries for the interior design team.</li>
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