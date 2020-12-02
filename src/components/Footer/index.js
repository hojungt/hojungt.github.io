// React
import React from 'react';

export default function Footer()  {
    return (
        <footer className="container-child">
            <div className="container" align="center">
                <h1 className="footer">© 2020&nbsp;<a className="footer" href="/">Rachael Tseng</a>&nbsp;New York</h1>
                <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fab fa-github-square"></i></a>
                <a className="footer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rachael-ho-jung-tseng/"><i className="fab fa-linkedin"></i></a>
                <p className="footer">
                    This site is built with <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React JS</a>, <a href="https://getbootstrap.com/">Bootstrap</a>, and React Bootstrap. 
                    <br />
                    Fonts by <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/">Google Fonts</a>. Background images by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/">Unsplash</a>.
                </p>
            </div>
        </footer>
    );
};