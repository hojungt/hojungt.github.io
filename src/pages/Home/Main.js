// React
import React from "react";

// npm
import { HashLink } from "react-router-hash-link";

export default function Main() {
    return (
        <div id="main">
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h1 className="intro">Hi, I'm Rachael,<br />a UX Designer who also codes.</h1>
                            </div>
                            <div className="col-12" id="btn-div-main">
                                <HashLink
                                    smooth to="#recent-projects"
                                    role="button"
                                    id="btn-main"
                                >
                                    View Projects
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}