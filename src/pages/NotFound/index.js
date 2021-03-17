// React
import React from 'react';

// Components
import Footer from '../../components/Footer';

// npm
import { HashLink } from 'react-router-hash-link';


export default function NotFound() {
    return (
        <div className="container-parent not-found">
            <div className="container h-100" id="not-found">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <h1>404 Not Found</h1>
                                <p className="mb-5">Sorry, but I don't have the page you are looking for.</p>
                                <HashLink
                                    to="/"
                                    id="btn-main"
                                >
                                    Back to Home
                                </HashLink>
                            </div>
                        </div>
                    </div>  
                </div>     
            </div>
            <Footer />  
        </div>
    )
}