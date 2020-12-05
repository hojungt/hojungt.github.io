// React
import React from "react";

// Project images and details
import imagesArch from "../../images/imagesArch.json";
import imagesOther from "../../images/imagesOther.json";

// npm
import { HashLink } from 'react-router-hash-link';

export default function SelectedWork() {
    return (
        <div>
            <div className="img-bg-selected-work container-child">
                <div className="container h-100" id="selected-work">
                    <div className="row h-100 justify-content-center align-items-center" align="center">
                        <div className="col-12">
                        <h1>Selected Work</h1>
                        <p>Professional architecture and interior design projects.</p>
                        <div className="row justify-content-center">
                            { imagesArch.map((image) => ( 
                                <div className={`col-12 col-sm-6 col-md-4 col-lg-4 div-card ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                            <div className="card-overlay">
                                                <h3 className="card-title">{image.title}</h3>
                                                <HashLink
                                                    to={`/selected-works/` + image.details} 
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
                        to="#selected-work-more" 
                        className="btn"
                        id="btn-more"
                    >
                        show more
                    </HashLink>
                </div>
            </div>

            <div className="img-bg-selected-work-more container-child">
                <div className="container h-100" id="selected-work-more">
                    <div className="row h-100 justify-content-center align-items-center" align="center">
                        <div className="col-12">
                        <h1>and more...</h1>
                        <p>Creative projects in various media.</p>
                        <div className="row justify-content-center">
                            { imagesOther.map((image) => ( 
                                <div className={`col-12 col-sm-6 col-md-4 col-lg-4 div-card ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                            <div className="card-overlay">
                                                <h3 className="card-title">{image.title}</h3>
                                                <a href={`/selected-works/` + image.details} className="btn">details</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        </div>
                    </div>
                </div>
                {/* <div id="btn-div-more">
                    <HashLink
                        to="#selected-work" 
                        className="btn"
                        id="btn-more"
                    >
                        show less
                    </HashLink>
                </div> */}
            </div>
        </div>
    )
}