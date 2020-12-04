// React
import React from 'react';

// Components
import Footer from '../../components/Footer';

// npm
import { HashLink } from 'react-router-hash-link';


export default function NotFound() {
    return (
        <div className="container-parent">
            <div className="img-bg-not-found container-child" id="not-found">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-10">
                                    <h1>404</h1>
                                    <p>Sorry, but I don't have the page you are looking for.</p>
                                    <HashLink
                                        to="/" 
                                        className="btn"
                                    >
                                        Back to Home
                                    </HashLink>
                                </div>
                            </div>
                        </div>  
                    </div>     
                </div>
            </div>
            <Footer />  
        </div>
    )
}