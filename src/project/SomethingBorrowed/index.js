// React
import React from "react";

// images
import image from "../../images/SomethingBorrowed_wireframe.png";
import style from "../../images/SomethingBorrowed_styling-standard.png";

// pdf
import balsamiq from "../../pdf/SomethingBorrowed.pdf";

function SomethingBorrowed() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="something-borrowed">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                    <h1 className="detail">Something Borrowed</h1>
                    <div className="mb-3" align="center">
                        <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://github.com/SomatThakali/project2"><i className="fas fa-code"></i>&nbsp;code</a>
                        <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://something-borrowed-2019.herokuapp.com/"><i className="fas fa-globe"></i>&nbsp;website</a>
                        <a className="btn detail" target="_blank" rel="noopener noreferrer" href={balsamiq}><i className="fas fa-palette"></i>&nbsp;wireframe</a>
                    </div>

                    <div id="carousel-detail-something-borrowed" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-something-borrowed" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-something-borrowed" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-something-borrowed" data-slide-to="2"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            {/* <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="gc_image-gif"
                                            /> */}
                                            <p className="caption">App Demo</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                <b>Something Borrowed</b> is a web application built with the idea of creating a community of borrowers and lenders. It was created as a solution to counter the modern problem of owning items we don’t need while also needing items we don’t own. The goal was to give everyone the choice of living a cheaper, cleaner and more sustainable life through the act of sharing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="something-borrowed_wireframe"
                                            />
                                            <p className="caption">Wireframe - generate quick mockup of user interface for internal discussion</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                We created an app in which participants grouped into sharing “hubs” list items they wish to lend to their fellow community members. Our system allowed users to post individual items into a community inventory to lend out to other users for a specified amount of time. Our SQL database stored unique user profiles, tracked community inventories, and managed community groups.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={style}
                                                className="d-block w-100"
                                                alt="something-borrowed_styling-standard"
                                            />
                                            <p className="caption">Styling standards - research on existing website with similar aesthetics</p>
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                My main focus for this project was to work with the front-end team in development and to streamline their efforts:
                                            </p>
                                            <ul className="detail">
                                                <li>Rapidly outlining the design and general user flow in Balsamiq in order to create an easy-to-follow blueprint for the site.</li>
                                                <li>Creating graphics and CSS standards to be consistently followed throughout the app.</li>
                                                <li>Organizing and collaborating with the team to assign roles to complete the project within a two week timeframe.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-something-borrowed" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-something-borrowed" role="button" data-slide="next">
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

export default SomethingBorrowed;