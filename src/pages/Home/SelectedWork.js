// React
import React from "react";

// Project images and details
import imagesCode from "../../images/imagesCode.json";

// npm
import { HashLink } from 'react-router-hash-link';

export default function SelectedWork() {
    return (
        <div id="work">
            <div className="container">
                <h1 className="main">Work</h1>
                <div className="row justify-content-center align-items-center" id="work-a">
                    <div className="col-12 col-md-5">
                        <h2 className="main">Groundcycle<br />Redesign</h2>
                        <p>#UX #UI #Startup #Agile #Frontend Development</p>
                    </div>
                    <div className="col-12 col-md-7">
                        Image
                    </div>
                </div>
                <div className="row justify-content-center align-items-center" id="work-b">
                    <div className="col-12 col-md-5">
                        <h2 className="main">Back on Track</h2>
                        <p>#UX #UI #User Research #Conceptual</p>
                    </div>
                    <div className="col-12 col-md-7">
                        Image
                    </div>
                </div>
                <div className="row justify-content-center align-items-center" id="work-c">
                    <div className="col-12 col-md-5">
                        <h2 className="main">Pomodoro</h2>
                        <p>#UX #UI #User Research #Conceptual</p>
                    </div>
                    <div className="col-12 col-md-7">
                        Image
                    </div>
                </div>
                <div className="row justify-content-center align-items-center" id="work-d">
                    <div className="col-12 col-md-5">
                        <h2 className="main">Questgiver</h2>
                        <p>#2-Week Dev Challenge #Frontend Development</p>
                    </div>
                    <div className="col-12 col-md-7">
                        Image
                    </div>
                </div>
            </div>
        </div>
    )
}