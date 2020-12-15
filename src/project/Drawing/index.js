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
                        <h1 className="detail">Drawing</h1>

                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div id="carousel-drawing" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-drawing" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="1"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="2"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="3"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="4"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="5"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="6"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="7"></li>
                                        <li data-target="#carousel-drawing" data-slide-to="8"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img 
                                                src={drawing01} 
                                                alt="drawing_object-pattern-01"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing02} 
                                                alt="drawing_object-pattern-02"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing03} 
                                                alt="drawing_object-pattern-03"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing04} 
                                                alt="drawing_object-pattern-04"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing05} 
                                                alt="drawing_object-pattern-05"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing06} 
                                                alt="drawing_object-pattern-06"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing07} 
                                                alt="drawing_object-pattern-07"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing08} 
                                                alt="drawing_object-pattern-08"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={drawing09} 
                                                alt="drawing_object-pattern-09"
                                                className="d-block w-100"
                                            />
                                        </div>
                                    </div>
                                    {/* <a className="carousel-control-prev" href="#carousel-drawing" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-drawing" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}