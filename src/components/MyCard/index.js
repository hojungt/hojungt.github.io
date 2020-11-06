import React from "react";

function MyCard(props) {
    return (
        <img 
            name={props.name}
            alt={props.name}
            src={require("../../images/" + props.image)}
            className="card-img-top"
            style={style}
        />
    )
}

const style = {
    maxHeight: "200px",
    maxWidth: "200px"
};

export default MyCard;