// React
import React from "react";

// images
// import image from "../../videos/vid_gc_test.gif";

export default function Questgiver() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="questgiver">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">Questgiver</h1>
                        <div className="mt-3 " align="center">
                            <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt/API-Project-1"><i className="fas fa-code"></i>&nbsp;code</a>
                            <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://rzhanghu64.github.io/projects/api-project-1/index.html"><i className="fas fa-globe"></i>&nbsp;website</a>
                        </div>

                        <div id="carousel-detail-questgiver" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-questgiver" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-questgiver" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-questgiver" data-slide-to="2"></li>
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
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                Questgiver is a game search engine designed to combat a common problem amongst many gamers: not knowing what to play next. Oftentimes, gamers (especially PC gamers) have the modern problem of too much choice. In order to solve that problem, Questgiver makes game suggestions based on the user’s preferences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            {/* <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="gc_image-gif"
                                            /> */}
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                The main feature of the app allows a user to look up any video game in existence through the search function, and the application will try to look for up to six other titles which have similar gameplay mechanics, concepts, and genres. All the game data and information is aggregated from the giantbomb.com and igdb.com APIs through axios queries and processed through an algorithm which finds the best matches based on the amount of similarities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            {/* <img 
                                                src={image}
                                                className="d-block w-100"
                                                alt="gc_image-gif"
                                            /> */}
                                        </div>
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <p className="detail">
                                                As the primary front-end developer for this project, I focused on:
                                            </p>
                                            <ul className="detail">
                                                <li>Outlining the basic design and user-flow to create a minimalistic and simplified user experience.</li>
                                                <li>Organizing the data output from the back-end queries to display in a presentable manner to users.</li>
                                                <li>Creating and implementing the CSS stylesheet and general look and feel of the site.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-questgiver" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-questgiver" role="button" data-slide="next">
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