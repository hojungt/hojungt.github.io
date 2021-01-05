// React
import React from "react";

// images
import cover from "../../images/project_125greenwich.jpg";
import chart from "../../images/125Greenwich_coordination-chart.png";
import renderInt from "../../images/125Greenwich_render-interior.jpg";
import sketch from "../../images/125Greenwich_scan-section.png";
import planResidential from "../../images/125Greenwich_plan-residential.png";
import planAmenity from "../../images/125Greenwich_plan-amenity.png";

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
                                <li data-target="#carousel-detail-greenwich" data-slide-to="4"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="project_125greenwich"
                                            />
                                            <p className="caption">Crowning amenity. Rendering by March & White Design.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                A high-end residential skyscraper, 125 Greenwich Street has a crowning triplex of amenities 85 stories above ground. It offers captivating views and stylish living for its residents in the heart of Manhattan’s World Trade Center. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={sketch}
                                                className="d-block w-100"
                                                alt="125Greenwich_scan-section"
                                            />
                                            <p className="caption">Coordination sketch - adjusting structural floor heights to adapt design changes</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                During the design and planning of this project, the marketing strategy for this complex was changed to fit its target demographic. The client wished to offer an exclusive amenity experience on the top floors while maintaining the same amount of sellable apartment units. Our team at Rafael Vinoly Architects was met with the task of redesigning the building to meet the client’s new needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={planResidential}
                                                className="d-block w-100"
                                                alt="125Greenwich_plan-residential"
                                            />
                                            <p className="caption">Floor plan - typical residential apartments by Rafael Vinoly Architects</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={planAmenity}
                                                className="d-block w-100"
                                                alt="125Greenwich_plan-amenity"
                                            />
                                            <p className="caption">Floor plan - amenity redesign by Rafael Vinoly Architects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={chart}
                                                className="d-block w-100"
                                                alt="125Greenwich_coordination-chart"
                                            />
                                            <p className="caption mt-2">Coordination chart - tracking coordination process and documentation across design disciplines.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                As an architectural designer, I took on the role of a team lead in this multifaceted redesign and covered various aspects of the project:
                                            </p>
                                            <ul className="detail">
                                                <li>Working directly with the design partner and project manager to reconfigure both building exterior and interior for the podium and penthouse floors.</li>
                                                <li>Collaborating with interior designers and engineers to execute all design intent and resolve mechanical conflict.</li>
                                                <li>Test-fitting units for optimized apartment layouts; researching legality of construction and verifying with building-code consultants.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={renderInt}
                                                className="d-block w-100"
                                                alt="125Greenwich_render-interior"
                                            />
                                            <p className="caption">Infinity Pool. Rendering by March & White Design.</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail" align="center">
                                                For more information, please visit the following sites:
                                            </p>
                                            <div className="mt-3 " align="center">
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