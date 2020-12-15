// React
import React from 'react';

export default function Footer()  {
    return (
        <footer className="container-child">
            <div className="container" align="center">
                <h1 className="footer mb-2">© 2020&nbsp;<a id="footer-name" href="/">Rachael Tseng</a></h1>
                <div className="mb-1">
                    <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i id="social-link" className="fab fa-github-square"></i></a>
                    <a className="footer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rachael-ho-jung-tseng/"><i id="social-link" className="fab fa-linkedin"></i></a>
                </div>
                <p className="footer">
                    This site is built with&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React JS</a>
                    &nbsp;and&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://pages.github.com/">GitHub Pages</a>. 
                    <br />
                    Fonts by&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/">Google Fonts</a>.&nbsp;
                    Background images by&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/">Unsplash</a>.
                </p>
            </div>
        </footer>
    );
};