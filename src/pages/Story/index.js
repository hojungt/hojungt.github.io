// React
import React from "react";

// Components
import Tab from '../../components/Tab';

class Story extends React.Component {

    handleTabClick = (param) => (event) => {
        this.props.onSelectTab(param);
        event.preventDefault();
        console.log("tab clicked");
    }

    render() {
        return (
            <div className="container" id="container-story">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-10">
                        <p className="story">
                            Hello, I am&nbsp;
                            <Tab 
                                name="Rachael Tseng" 
                                onClick={this.handleTabClick("profile")} 
                                className="resume"
                            />
                            , a Front-end Web Developer.
                            <br />I believe good design can change lives. Practicing with my best, I am&nbsp;
                            <Tab 
                                name="versatile" 
                                onClick={this.handleTabClick("skills")} 
                                className="resume"
                            />
                            , open to&nbsp;
                            <Tab 
                                name="radical ideas" 
                                onClick={this.handleTabClick("thesis")} 
                                className="project-arch"
                            />
                            , and always challenging myself to solve&nbsp;
                            <Tab 
                                name="the greater problem" 
                                onClick={this.handleTabClick("groundcycle")} 
                                className="project-code"
                            />
                            .
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
                            <a className="resume" href="/">Let's work together!</a>
                        </p>
                    </div>
                </div>
            </div>
    
        )
    }
};

export default Story;