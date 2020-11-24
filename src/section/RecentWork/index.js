// React
import React from "react";

// Project images and details
import imagesCode from "../../images/imagesCode.json";

export default function RecentWork() {
    return (
        <div className="img-bg-recent-work">
            <div className="container h-100" id="recent-work">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                    <h1>Recent Work</h1>
                    <p>lorem ipsum</p>

                        <div className="row justify-content-center">
                            { imagesCode.map((image) => ( 
                                <div className={`col-12 col-sm-4 col-md-4 col-lg-4 ` + image.className} key={image.id} id={image.id}>
                                    <div className="card h-100" align="center">
                                        <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                        <div className="card-img-overlay">
                                            <div className="card-test">
                                                <h3 className="card-title">{image.title}</h3>
                                                <a 
                                                    className="btn"
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    href={image.website} 
                                                >
                                                    website
                                                </a>
                                                <a href="#" className="btn">details</a>
                                            </div>
                                        </div>
                                        {/* <div className="row no-gutters">
                                            <div className="col-4">
                                                <img className="card-img" src={require("../../images/" + image.image)} alt={image.name} />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <h3 className="card-title">{image.title}</h3>
                                                    <p className="card-text">{image.text}</p>
                                                    <a 
                                                        className="btn"
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        href={image.website} 
                                                    >
                                                        website
                                                    </a>
                                                    <a href="#" className="btn">details</a>
                                                </div>
                                            </div>
                                        </div> */}
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