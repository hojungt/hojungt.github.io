// React
import React from 'react';

// images
import main from '../../images/project_125greenwich.jpg';
import render from '../../images/125Greenwich_render.jpg';
import sketch from '../../images/125Greenwich_scan-section.png';


export default function Greenwich() {

    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="greenwich">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <h1>125 Greenwich Street</h1>

                        <div className="overflow-auto" id="scroll-box">
                            <div className="row">
                                <div className="col-12 col-lg-7">
                                    <img 
                                        src={main} 
                                        alt="img-greenwich-main"
                                        className="img-fluid" 
                                    />
                                </div>
                                <div className="col-12 col-lg-5">
                                    <p>
                                        A high-end residential building in World Trade Center, 125 Greenwich Street has a crowning triplex of amenities 85 stories above ground, offering captivating views and stylish livings for its residents.
                                    </p>
                                    <p>
                                        Status: in construction 
                                        <br />
                                        (estimate completion in 2021)
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-lg-5">
                                    <img 
                                        src={sketch} 
                                        alt="img-greenwich-sketch"
                                        className="img-fluid" 
                                    />
                                </div>
                                <div className="order-sm-1 col-12 col-lg-7">
                                    <h2>Design Objectives</h2>
                                    <p>
                                        Marketing strategy changed to fit demographic
                                        Client want to offer exclusive amenity experience 
                                        Architect want to break away from conventional zoning approach, and he proposed a shorter building with larger floor plate and nearly column-free interior
                                        Requires program restacking: prodium changed from mechanical space to loft apartment units, and penthouse units were combined into amenity floors
                                    </p>
                                    <br />
                                    <h2>Strategy and Implementation</h2>
                                    <p>
                                        This redesign calls for intensive coordination in structural and mechanical engineering
                                        while maintaining aesthetic language 
                                        Redesign podium and top-of-tower floor plans for program change; test-fit mechanical space for loft apartments and combine apartment units for new amenity spaces.
                                        Coordinate with lead architect, interior design, structure, plumbing, electrical, enclosure, building code, and marketing professionals for redesigned portions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3">
                                <img 
                                    src={render} 
                                    alt="img-greenwich-render"
                                    className="img-fluid" 
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )

}