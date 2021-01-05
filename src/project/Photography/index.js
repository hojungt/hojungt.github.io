// React
import React from "react";

//images
import cover from "../../images/other_photography.jpg";
import photo01 from "../../images/photography_object-pattern-01.jpg";
import photo02 from "../../images/photography_object-pattern-02.jpg";
import photo03 from "../../images/photography_object-pattern-03.jpg";
import photo04 from "../../images/photography_object-pattern-04.jpg";
import photo05 from "../../images/photography_object-pattern-05.jpg";
import photo06 from "../../images/photography_object-pattern-06.jpg";
import photo07 from "../../images/photography_object-pattern-07.jpg";
import photo08 from "../../images/photography_object-pattern-08.jpg";
import photo09 from "../../images/photography_object-pattern-09.jpg";
import photo00 from "../../images/photography_object-pattern-00.jpg";

export default function Photography() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="photography">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">Photography</h1>

                        <div id="carousel-detail-photography" className="carousel slide carousel-detail" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-detail-photography" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-detail-photography" data-slide-to="1"></li>
                                <li data-target="#carousel-detail-photography" data-slide-to="2"></li>
                                <li data-target="#carousel-detail-photography" data-slide-to="3"></li>
                                <li data-target="#carousel-detail-photography" data-slide-to="4"></li>
                                <li data-target="#carousel-detail-photography" data-slide-to="5"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-10 col-md-6 col-lg-6">
                                            <img 
                                                src={cover}
                                                className="d-block w-100"
                                                alt="other_photography"
                                            />
                                        </div>
                                        <div className="col-12  col-md-6 col-lg-6">
                                            <p className="detail">
                                                <b>Object | Pattern</b> is a digital photography series initiated by simple fascination with objects.
                                                Whether it is framing a field or isolating a single object, I determine a pattern according to my vision when my sight meets objects. When possible, I capture the objects at minimal distance. 
                                                Chosen with a depth-of-field true to the instance of observation, each photograph accentuates a pattern composition for the objects and vice versa.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo01}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-01"
                                            />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo02}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-02"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo03}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-03"
                                            />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo04}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-04"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo05}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-05"
                                            />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo06}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-06"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo07}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-07"
                                            />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo08}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-08"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-100">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo09}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-09"
                                            />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <img 
                                                src={photo00}
                                                className="d-block w-100"
                                                alt="photography_object-pattern-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <a className="carousel-control-prev" href="#carousel-detail-photography" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-detail-photography" role="button" data-slide="next">
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