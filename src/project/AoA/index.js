// React
import React from "react";

// images
import cover from "../../images/project_531aoa.jpg";
import gifType from "../../images/531-aoa_revit-kitchen-families.gif";
import gifParam from "../../images/531-aoa_revit-kitchen-parameters.gif";
import render from "../../images/531-aoa_render-terrace.jpg";
import chart from "../../images/531-aoa_type-chart.png";
import moduleK from "../../images/531-aoa_module-kitchen.png";

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
                                <li data-target="#carousel-detail-aoa" data-slide-to="4"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="project_531aoa"
                                            />
                                            <p className="caption">Architectural design. Concept rendering by ODA Architecture.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                A distinctive complex, <b>101 W 14th Street</b> is a new residential development at the cusp of Chelsea and Greenwich village in Manhattan. The client wished to deliver a building that both yields extra space and maximizes resident privacy in this busy district. Instead of adapting traditional stacked layouts, the condominium provides each unit a unique layout of its own and a private terrace for a refined living experience. 
                                             </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6 mt-2">
                                            <img 
                                                src={gifParam}
                                                className="d-block w-100 frame"
                                                alt="Aoa_revit-kitchen-parameters"
                                            />
                                            <p className="caption">Example of parameter manipulation - <br /> adjusting overall kitchen dimension changes customizable cabinet only.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                Due to the non-conformist nature of this project, this project called to design each individual unit separately while adhering to construction conventions. Aside from creating a large amount of customization and various documentation of similar modules, our team at Whitehall Interiors collaborated closely with the rest of the project team. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={gifType}
                                                className="d-block w-100"
                                                alt="Aoa_revit-kitchen-families"
                                            />
                                            <p className="caption">Revit component - reusable model complies with design convention.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={moduleK}
                                                className="d-block w-100"
                                                alt="Aoa_module-kitchen"
                                            />
                                            <p className="caption">Plan study of kitchen module variety</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={chart}
                                                className="d-block w-100"
                                                alt="Aoa_type-chart"
                                            />
                                            <p className="caption">Type chart - list of adjustable modules created with code system.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
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
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={render}
                                                className="d-block w-100"
                                                alt="Aoa_render-terrace"
                                            />
                                            <p className="caption">Apartment private terrace. Rendering by ODA Architecture.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="status" align="center">
                                                This project is currently under construction. 
                                                <br />
                                                For more information, please visit the following site:
                                            </p>
                                            <div className="mt-3" align="center">
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