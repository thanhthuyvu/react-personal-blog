import React from 'react';
import SlideView from './SlideView';
import Gallery from './Gallery';
import About from './About';
import Blog from './Blog';


const Home = () => {
    return(
        <div>
        <SlideView />
        <About /> 
        <Blog />
        <Gallery />
        </div>
    )
}

export default Home;