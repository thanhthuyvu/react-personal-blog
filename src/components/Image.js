import React from "react";

function Image(props){
    return(
        <img className = "insta-img"
        src = {props.url}></img>
     
    );
}

export default Image;