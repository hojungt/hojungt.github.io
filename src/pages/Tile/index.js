// React
import React from "react";

// Components
import Card from "react-bootstrap/Card";

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
                    <div className="col-lg-4">
                        <h1>Web Application</h1>
                        <Card style={{ width: '18rem' }} onClick={this.handleCardClick("groundcycle")}>
                            <Card.Img variant="top" src="images/rachael_tseng_01.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <h1>
                            Architecture and Design
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <h1>
                            Other Projects
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <h1>
                            About
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tile;