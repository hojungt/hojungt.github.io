// React
import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div className="container">
                    <div className="row justify-content-center mb-2">
                        <a className="footer" href="mailto:hojungt@gmail.com"><i className="fab fa-telegram-plane"></i></a>
                        <a className="footer" target="_blank" rel="noopener noreferrer" href="https://github.com/hojungt"><i className="fab fa-github"></i></a>
                        <a className="footer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rachael-ho-jung-tseng/"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="row justify-content-center">
                        <h1 className="footer">Rachael [ Ho-Jung ] Tseng © 2020</h1>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer; 