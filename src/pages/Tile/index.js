// React
import React from "react";

// Components
import Card from "react-bootstrap/Card";
import imagesArch from "../../images/imagesArch.json";
import imagesCode from "../../images/imagesCode.json";
import imagesOther from "../../images/imagesOther.json";
import imagesResume from "../../images/imagesResume.json";

// import MyCard from "../../components/MyCard";

class Tile extends React.Component {

    handleCardClick = (param) => (event) => {
        this.props.onSelectCard(param);
        event.preventDefault();
        console.log("card clicked");
    }

    render() {
        return (
            <div className="container" id="container-tile">
                
                <h1>Rachael Tseng's Portfolio</h1>
                <div className="row">
                    <div className="col-lg-10">
                        <h1>Web Applications</h1>
                    </div>
                    { imagesCode.map((image) => ( 
                        <div className="col-lg-4" key={image.id} id={image.id}
                        >
                            <Card onClick={this.handleCardClick(image.name)}>
                                <Card.Img 
                                    name={image.name}
                                    alt={image.name}
                                    src={require("../../images/" + image.image)}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>{image.text}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <h1>Architecture and Interior Design</h1>
                    </div>
                    { imagesArch.map((image) => ( 
                        <div className="col-lg-4" key={image.id} id={image.id}
                        >
                            <Card onClick={this.handleCardClick(image.name)}>
                                <Card.Img 
                                    name={image.name}
                                    alt={image.name}
                                    src={require("../../images/" + image.image)}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>{image.text}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
                
                <div className="row">
                    <div className="col-lg-10">
                        <h1>Other Projects</h1>
                    </div>
                    { imagesOther.map((image) => ( 
                        <div className="col-lg-4" key={image.id} id={image.id}
                        >
                            <Card onClick={this.handleCardClick(image.name)}>
                                <Card.Img 
                                    name={image.name}
                                    alt={image.name}
                                    src={require("../../images/" + image.image)}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>{image.text}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <h1>Resume</h1>
                    </div>
                    { imagesResume.map((image) => ( 
                        <div className="col-lg-4" key={image.id} id={image.id}
                        >
                            <Card onClick={this.handleCardClick(image.name)}>
                                <Card.Img 
                                    name={image.name}
                                    alt={image.name}
                                    src={require("../../images/" + image.image)}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>{image.text}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Tile;