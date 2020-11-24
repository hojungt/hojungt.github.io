// React
import React from "react";

// Project images and details
import imagesArch from "../../images/imagesArch.json";
import imagesOther from "../../images/imagesOther.json";

export default function SelectedWork() {
    return (
        <div>
            <div className="img-bg-selected-work" id="selected-work">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-12">
                        <h1>Selected Work</h1>
                        <p>lorem ipsum</p>
                        
                        <div className="row justify-content-center">
                            { imagesArch.map((image) => ( 
                                <div className={`col-12 col-sm-4 col-md-4 col-lg-4 ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay">
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
                                                <a href="#" className="btn">details</a>
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

            <div className="img-bg-selected-work-more" id="selected-work-more">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-12">
                        <h1>and more...</h1>
                        <p>lorem ipsum</p>

                        <div className="row justify-content-center">
                            { imagesOther.map((image) => ( 
                                <div className={`col-12 col-sm-4 col-md-4 col-lg-4 ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay">
                                            <div className="card-test">
                                                <h3 className="card-title">{image.title}</h3>
                                                <a href="#" className="btn">details</a>
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
        </div>
    )
}