import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import Home from './components/Home';
import Header from './components/Header';
import Project from './components/Projects';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            fr: true
        }
        this.handleLanguage = this.handleLanguage.bind(this);
    }
    handleLanguage(){
        const reverse = !this.state.fr;
        this.setState({
            fr: reverse
        })
    }
    render(){
    return ( 
        <div className = "App" >
        <Header handleChange={this.handleLanguage} langFr={this.state.fr}/>
        <Home langFr={this.state.fr}/>
        <Presentation langFr={this.state.fr}/>
        <Project langFr={this.state.fr}/>
        </div>
    );
}
}

export default App;