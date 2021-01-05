// React
import React from "react";

// images
import imagesDrawing from "../../images/imagesDrawing.json";

export default function Drawing() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="drawing">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">Drawings</h1>

                        <div id="carousel-detail-drawing" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-drawing" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-drawing" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-drawing" data-slide-to="2"></li>
                                <li data-target="#carousel-detail-drawing" data-slide-to="3"></li>
                                <li data-target="#carousel-detail-drawing" data-slide-to="4"></li>
                                <li data-target="#carousel-detail-drawing" data-slide-to="5"></li>
                                <li data-target="#carousel-detail-drawing" data-slide-to="6"></li>
                                <li data-target="#carousel-detail-drawing" data-slide-to="7"></li>
                            </ol>

                            <div className="carousel-inner">
                                { imagesDrawing.map((image) => (
                                    <div className={"carousel-item h-100 " + image.className} key={image.id}>
                                        <div className="row justify-content-center align-items-center h-100">
                                            <div className="col-12" id={image.id}>
                                                <img 
                                                    src={require("../../images/" + image.image)}
                                                    className="d-block w-100"
                                                    id="drawing"
                                                    alt={image.name}
                                                />
                                                <p className="caption-drawing mt-2"><b>{image.title}</b> {image.caption}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-drawing" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-drawing" role="button" data-slide="next">
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