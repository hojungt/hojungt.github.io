// React
import React from "react";
import image from "../../images/rachael-tseng.jpg";

export default function Main() {
    return (
        <div className="img-bg-main">
            <div className="container" id="main">
                <div className="row h-100 justify-content-center">
                    <div className="col-12 col-lg-3">
                        <h1>Hi, I'm Rachael Tseng.</h1>
                    </div>
                    <div className="col-12 col-lg-3" align="center">
                        <img src={image} alt="rachael-tseng" className="img-thumbnail" id="img-profile"/>
                    </div>
                </div>
            </div>
        </div>
    )
}