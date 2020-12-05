// React
import React from "react";

function SomethingBorrowed() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="something-borrowed">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12 col-lg-7">
                        <img style={{ width: "100%" }} src="images/rachael_tseng_01.png" alt="project-something-borrowed"/>
                    </div>
                    <div className="col-12 col-lg-5">
                        <h1>Something Borrowed</h1>
                        <p>Project duration: Aug 2020 - present</p>
                        <p>Wireframe: Axure XP</p>
                        <p>Language: React MongoDB Express Node</p>
                        <div>
                            <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="far fa-file-code"></i> original code</a>
                            <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fas fa-globe"></i> website</a>
                            <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fab fa-instagram"></i> instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomethingBorrowed;