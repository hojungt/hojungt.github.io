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
                            , a Front-end Web Developer. <br />I believe good design can change lives. Practicing with my best, I am&nbsp;
                            <Tab 
                                name="versatile" 
                                onClick={this.handleTabClick("skills")} 
                                className="resume"
                            />
                            , open to&nbsp;
                            <Tab 
                                name="radical ideas" 
                                onClick={this.handleTabClick("thesis")} 
                                className="project-other"
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
                            I have rich experience in&nbsp;
                            <Tab 
                                name="architecture" 
                                onClick={this.handleTabClick("greenwich")} 
                                className="project-arch"
                            />
                            &nbsp;and&nbsp;
                            <Tab 
                                name="interior design" 
                                onClick={this.handleTabClick("aoa")} 
                                className="project-arch"
                            />
                            , and I have worked with professionals across many disciplinaries. 
                            I am now pursuing an expertise in&nbsp;
                            <Tab 
                                name="Front-end Design and User Experience" 
                                onClick={this.handleTabClick("skills")} 
                                className="resume"
                            />
                            . Aside from work, I enjoy&nbsp;
                            <Tab 
                                name="drawing" 
                                onClick={this.handleTabClick("drawing")} 
                                className="project-other"
                            />
                            ,&nbsp;
                            <Tab 
                                name="gaming" 
                                onClick={this.handleTabClick("questgiver")} 
                                className="project-code"
                            />
                            , and&nbsp;
                            <Tab 
                                name="photography" 
                                onClick={this.handleTabClick("photography")} 
                                className="project-other"
                            />
                            .
                        </p>
                        <p className="story">
                            <Tab 
                                name="Let's work together!" 
                                onClick={this.handleTabClick("contact")} 
                                className="resume"
                            />
                        </p>
                    </div>
                </div>
            </div>
    
        )
    }
};

export default Story;