import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import Home from './components/Home';
import Header from './components/Header';
import Project from './components/Projects';

function App() {
    return ( 
        <div className = "App" >
        <Header/>
        <Home/>
        <Presentation/>
        <Project/>
        </div>
    );
}

export default App;