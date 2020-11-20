// React
import React from "react";

// Component
import Tile from "../../components/Tile";

export default function RecentWork() {
    return (
        <div className="img-bg-recent-work">
            <div className="container h-100" id="recent-work">
                <div className="row h-100 justify-content-center align-items-center" align="center">
                    <div className="col-12">
                        <h1>(description text)</h1>
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-4">
                                <Tile />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Tile />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Tile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}