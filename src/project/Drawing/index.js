// React
import React from "react";

// images
import drawing01 from "../../images/drawing_01.jpg";
import drawing02 from "../../images/drawing_02.jpg";
import drawing03 from "../../images/drawing_03.jpg";
import drawing04 from "../../images/drawing_04.jpg";
import drawing05 from "../../images/drawing_05.jpg";
import drawing06 from "../../images/drawing_06.jpg";
import drawing07 from "../../images/drawing_07.jpg";
import drawing08 from "../../images/drawing_08.jpg";
import drawing09 from "../../images/drawing_09.jpg";

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
                                <li data-target="#carousel-detail-drawing" data-slide-to="8"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            <img 
                                                src={drawing01}
                                                className="d-block w-100"
                                                alt="drawing_01"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            <img 
                                                src={drawing02}
                                                className="d-block w-100"
                                                alt="drawing_02"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 mb-3">
                                            <img 
                                                src={drawing03}
                                                className="d-block w-100"
                                                alt="drawing_03"
                                            />
                                        </div>
                                    </div>
                                </div>
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