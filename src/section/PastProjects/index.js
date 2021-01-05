// React
import React from "react";

// Project images and details
import imagesArch from "../../images/imagesArch.json";
import imagesOther from "../../images/imagesOther.json";

// npm
import { HashLink } from 'react-router-hash-link';

export default function PastProjects() {
    return (
        <div>
            <div className="img-bg-past-projects container-child">
                <div className="container h-100" id="past-projects">
                    <div className="row h-100 justify-content-center align-items-center" align="center">
                        <div className="col-12">
                            <h1>Past Projects</h1>
                            <h2 className="main">Professional architecture and interior design projects.</h2>
                            <div className="row justify-content-center">
                                { imagesArch.map((image) => ( 
                                    <div className={`col-12 col-sm-6 col-md-4 col-lg-4 div-card ` + image.className} key={image.id} id={image.id}>
                                        <div className="card h-100" align="center">
                                            <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                                <div className="card-overlay">
                                                    <h3 className="card-title">{image.title}</h3>
                                                    <HashLink
                                                        to={`/past-projects-view/` + image.details} 
                                                        className="btn"
                                                    >
                                                        details
                                                    </HashLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="btn-div-more">
                    <HashLink
                        smooth to="#past-projects-more" 
                        className="btn"
                        id="btn-more"
                    >
                        show more
                    </HashLink>
                </div>
            </div>

            <div className="img-bg-past-projects-more container-child">
                <div className="container h-100" id="past-projects-more">
                    <div className="row h-100 justify-content-center align-items-center" align="center">
                        <div className="col-12">
                        <h1>Past Projects</h1>
                        <h2 className="main">Creative projects in various media.</h2>
                        <div className="row justify-content-center">
                            { imagesOther.map((image) => ( 
                                <div className={`col-12 col-sm-6 col-md-4 col-lg-4 div-card ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                            <div className="card-overlay">
                                                <h3 className="card-title">{image.title}</h3>
                                                <HashLink
                                                    to={`/past-projects-view/` + image.details} 
                                                    className="btn"
                                                >
                                                    details
                                                </HashLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        </div>
                    </div>
                </div>
                <div id="btn-div-more">
                    <HashLink
                        smooth to="#past-projects" 
                        className="btn"
                        id="btn-more"
                    >
                        show less
                    </HashLink>
                </div>
            </div>
        </div>
    )
}