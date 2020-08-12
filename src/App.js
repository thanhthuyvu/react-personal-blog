import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Gallery from './components/Gallery';

function App() {
    return (
    <BrowserRouter> 
    <div className = "App">
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/blog' component={Blog} />
        </Switch>
        
    </div>
    </BrowserRouter>)
}

export default App;
                                                           