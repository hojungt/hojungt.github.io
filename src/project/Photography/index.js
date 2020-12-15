// React
import React from "react";

//images
import photo01 from "../../images/photography_object-pattern-01.jpg";
import photo02 from "../../images/photography_object-pattern-02.jpg";
import photo03 from "../../images/photography_object-pattern-03.jpg";
import photo04 from "../../images/photography_object-pattern-04.jpg";
import photo05 from "../../images/photography_object-pattern-05.jpg";
import photo06 from "../../images/photography_object-pattern-06.jpg";
import photo07 from "../../images/photography_object-pattern-07.jpg";
import photo08 from "../../images/photography_object-pattern-08.jpg";
import photo09 from "../../images/photography_object-pattern-09.jpg";
import photo10 from "../../images/photography_object-pattern-10.jpg";

export default function Photography() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="photography">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="detail">Photography</h1>

                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div id="carousel-photography" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-photography" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-photography" data-slide-to="1"></li>
                                        <li data-target="#carousel-photography" data-slide-to="2"></li>
                                        <li data-target="#carousel-photography" data-slide-to="3"></li>
                                        <li data-target="#carousel-photography" data-slide-to="4"></li>
                                        <li data-target="#carousel-photography" data-slide-to="5"></li>
                                        <li data-target="#carousel-photography" data-slide-to="6"></li>
                                        <li data-target="#carousel-photography" data-slide-to="7"></li>
                                        <li data-target="#carousel-photography" data-slide-to="8"></li>
                                        <li data-target="#carousel-photography" data-slide-to="9"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img 
                                                src={photo01} 
                                                alt="photography_object-pattern-01"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo02} 
                                                alt="photography_object-pattern-02"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo03} 
                                                alt="photography_object-pattern-03"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo04} 
                                                alt="photography_object-pattern-04"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo05} 
                                                alt="photography_object-pattern-05"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo06} 
                                                alt="photography_object-pattern-06"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo07} 
                                                alt="photography_object-pattern-07"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo08} 
                                                alt="photography_object-pattern-08"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo09} 
                                                alt="photography_object-pattern-09"
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img 
                                                src={photo10} 
                                                alt="photography_object-pattern-10"
                                                className="d-block w-100"
                                            />
                                        </div>
                                    </div>
                                    {/* <a className="carousel-control-prev" href="#carousel-photography" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-photography" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a> */}
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h2>Object Patterns | Patterned Object</h2>
                                <p>
                                    A simple fascination with objects initiates this concentration series.
                                    When possible, I capture the objects at minimal distance. Chosen with a depth-of-field true to the instance of observation, each photograph accentuates a specific pattern composition for the objects, and vice versa.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}