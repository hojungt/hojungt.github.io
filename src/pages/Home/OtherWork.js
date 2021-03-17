// React
import React from "react";

// Project images and details
import imagesOther from "../../images/imagesOther.json";

// npm
import { HashLink } from 'react-router-hash-link';

export default function OtherWork() {
    return (
        <div id="other">
            <div className="container">
                <h1 className="main">Other</h1>
                {/* test zone css */}
                <a className="test" href="/drawing"><h1>installation</h1></a>
                <a className="test" href="/drawing"><h1>sketches</h1></a>
                <a className="test" href="/drawing"><h1>photography</h1></a>
            </div>
        </div>

    )
}