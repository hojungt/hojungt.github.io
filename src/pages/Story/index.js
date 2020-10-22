// React
import React from "react";

class Story extends React.Component {

    render () {
        return (
            <div className="container" id="container-story">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-10">
                        <p className="story">
                            Hello, I am 
                            <a className="resume" href="/"> Rachael Tseng</a>, a Front-end Web Developer. 
                            <br />I believe good design can change lives. Practicing with my best, I am
                            <a className="resume" href="/"> versatile</a>, open to 
                            <a className="project-arch" href="/"> radical ideas</a>, and always challenging myself to solve the 
                            <a className="project-code" href="/"> greater problems</a>.
                        </p>
                        <p className="story">
                            I have rich experience in
                            <a className="project-arch" href="/"> architecture</a> and 
                            <a className="project-arch" href="/"> interior design</a>, and I have worked with professionals across many disciplinaries. 
                            I am now pursuing an expertise in 
                            <a className="project-arch" href="/"> Front-end Design</a> and 
                            <a className="resume" href="/"> User Experience</a>. Aside from work, I enjoy 
                            <a className="project-other" href="/"> drawing</a>, 
                            <a className="project-code" href="/"> gaming</a>, and 
                            <a className="project-other" href="/"> digital photography</a>.
                        </p>
                        <p className="story">
                            <a className="resume">Let's work together!</a>
                        </p>
                    </div>
                </div>
            </div>
    
        )
    }
};

export default Story;