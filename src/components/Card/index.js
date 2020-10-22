import React from "react";

function Card(props) {
    return (
        <img 
            className="img-fluid img-thumbnail"
            alt={props.name}
            src={require("../images/" + props.image)}
            style={style}

        />
    )
}

const style = {
    maxHeight: "200px",
    maxWidth: "200px"
};

export default Card;