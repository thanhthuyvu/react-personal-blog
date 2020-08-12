import React from "react";
import Slider from "react-slick";
import Image from "./Image";
import pics from "../albums.js"
function createImage(pic){
    return( 
  
        <img 
        className = "info-img"
        src = {pic.imgURL}/>
    
    )
       
}

function SlideView(){

return(

        <Slider className="slide"
        speed = {500}
        slidesToShow = {1}
        slidesToScroll = {1}
        infinite = {false}
        dots = {true}
        >
        {pics.map(createImage)}
        </Slider>
  
)
}

export default SlideView;