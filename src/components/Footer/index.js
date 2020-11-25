// React
import React from 'react';

export default function Footer()  {
    return (
        <footer className="container-child">
            <div className="container" align="center">
                <h1 className="footer">© 2020<a className="footer" href="/">&nbsp;Rachael Tseng</a></h1>
                <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fab fa-github-square"></i></a>
                <a className="footer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rachael-ho-jung-tseng/"><i className="fab fa-linkedin"></i></a>
                <p className="footer">
                    This site is built with <a>React JS</a>, Bootstrap, and React Bootstrap. 
                    <br />
                    Fonts by <a>Google Fonts</a>. Background images by <a>Unsplash</a>.
                </p>
            </div>
        </footer>
    );
};