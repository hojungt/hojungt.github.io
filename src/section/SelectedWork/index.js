// React
import React from "react";

// Project images and details
import imagesArch from "../../images/imagesArch.json";
import imagesOther from "../../images/imagesOther.json";

export default function SelectedWork() {
    return (
        <div>
            <div className="img-bg-selected-work container-child">
                <div className="container h-100" id="selected-work">
                    <div className="row h-100 justify-content-center align-items-center" align="center">
                        <div className="col-12">
                        <h1>Selected Work</h1>
                        <p>lorem ipsum</p>
                        
                        <div className="row justify-content-center">
                            { imagesArch.map((image) => ( 
                                <div className={`col-12 col-sm-6 col-md-4 col-lg-4 ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                            <div className="card-test">
                                                <h3 className="card-title">{image.title}</h3>
                                                {/* <a 
                                                    className="btn"
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    href={image.website} 
                                                >
                                                    website
                                                </a> */}
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
                <div id="btn-div-more">
                    <a href="#selected-work-more">
                        <button id="btn-more">
                            show more
                        </button>
                    </a>
                </div>
            </div>

            <div className="img-bg-selected-work-more container-child">
                <div className="container h-100" id="selected-work-more">
                    <div className="row h-100 justify-content-center align-items-center" align="center">
                        <div className="col-12">
                        <h2>and more...</h2>
                        <p>lorem ipsum</p>

                        <div className="row justify-content-center">
                            { imagesOther.map((image) => ( 
                                <div className={`col-12 col-sm-6 col-md-4 col-lg-4 ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                            <div className="card-test">
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
                <div id="btn-div-more">
                    <a href="#selected-work">
                        <button id="btn-more">
                            show less
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}