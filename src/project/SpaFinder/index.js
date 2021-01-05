// React
import React from "react";

// images
import cover from "../../images/project_spafinder.jpg";
import floorplan from "../../images/spafinder_floorplan.png";
import image01 from "../../images/spafinder_photo-01.jpg";
import image02 from "../../images/spafinder_photo-02.jpg";

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
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="project_spafinder"
                                            />
                                            <p className="caption">Reception, office amenity and main corridor. Photograph by TRIARCH Inc.</p>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <p className="detail">
                                                <b>SpaFinder</b> is a self-care scheduling service that prides itself in gifting wellness. 
                                                The client sought an office environment that promotes a healthy work style and resonates with the company's core values. To achieve this, the new space called for glass, wood, and a vibrant color palette. Glass partitions introduce a visually open environment and physically private cubicles. Wood ceiling fins and floor finishing form a soothing connection between reception and working stations. Solid colors warm and bring energy with natural lighting, all to make every workday a pleasant one.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={floorplan}
                                                className="d-block w-100"
                                                alt="spafinder_floorplan"
                                            />
                                            <p className="caption mt-3">Architectural floor plan by TRIARCH Inc.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                The space given for renovation wasn’t ideal: the floorplate was long and narrow, modularized by the building’s enclosure. Fitting additional amenities into the floorplan required multiple tests and trials. Our team at Triarch Inc. turned the weakness of this space to our advantage: removing dropped ceilings to lift the visual height and designating open workspaces along the windows to allow natural lighting to reach into the cubicles. The result is an open yet cozy office environment for its employees, clients, and partners to work dynamically in.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={image01}
                                                className="d-block w-100"
                                                alt="spafinder_photo01"
                                            />
                                            <p className="caption">Main conference room. Photograph by TRIARCH Inc.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                Assigned to a small project team, I worked directly with the firm’s design principal to execute this fast-paced renovation:
                                            </p>
                                            <ul className="detail">
                                                <li>Creating various layout options to befit user needs.</li>
                                                <li>Researching unconventional construction details to realize design intent.</li>
                                                <li>Drafting thorough construction documentation; preparing client presentations.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={image02}
                                                className="d-block w-100"
                                                alt="spafinder_photo02"
                                            />
                                            <p className="caption">Private cubicles and open workspaces. Photograph by TRIARCH Inc.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="status" align="center">
                                                This project is completed. For more information, please visit the following site:
                                            </p>
                                            <div className="mt-3" align="center">
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