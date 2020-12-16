// React
import React from "react";

// Project images and details
import imagesCode from "../../images/imagesCode.json";

// npm
import { HashLink } from 'react-router-hash-link';

export default function RecentProjects() {
    return (
        <div className="img-bg-recent-projects container-child">
            <div className="container h-100" id="recent-projects">
                <div className="row h-100 justify-content-center align-items-center" align="center">
                    <div className="col-12">
                        <h1>Recent Projects</h1>
                        <h2 className="main">Comprehensive, useful, and fun web applications.</h2>
                        <div className="row justify-content-center">
                            { imagesCode.map((image) => ( 
                                <div className={`col-12 col-sm-6 col-md-4 col-lg-4 div-card ` + image.className} key={image.id} id={image.id}>
                                    <div className="card" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                            <div className="card-overlay">
                                                <h3 className="card-title">{image.title}</h3>
                                                <a 
                                                    className="btn"
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    href={image.website} 
                                                >
                                                    website
                                                </a>
                                                <HashLink
                                                    to={`/recent-projects-view/` + image.details} 
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
        </div>
    )
}