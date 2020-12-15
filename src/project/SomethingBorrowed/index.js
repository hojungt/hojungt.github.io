// React
import React from "react";

// pdf
import balsamiq from "../../pdf/SomethingBorrowed.pdf";

function SomethingBorrowed() {
    return (
        <div className="img-bg-detail container-child">
            <div className="container h-100" id="something-borrowed">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                    <h1 className="detail">Something Borrowed</h1>
                    <div className="mt-3 mb-3" align="center">
                        <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://github.com/SomatThakali/project2"><i className="fas fa-code"></i>&nbsp;code</a>
                        <a className="btn detail" target="_blank" rel="noopener noreferrer" href="https://something-borrowed-2019.herokuapp.com/"><i className="fas fa-globe"></i>&nbsp;website</a>
                        <a className="btn detail" target="_blank" rel="noopener noreferrer" href={balsamiq}><i className="fas fa-palette"></i>&nbsp;wireframe</a>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomethingBorrowed;