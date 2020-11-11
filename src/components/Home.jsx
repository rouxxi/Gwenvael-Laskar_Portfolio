import React from 'react';
import styled from 'styled-components';
import HomeFont from './img/green-2551467_1920.jpg'
const Body = styled.div`
    display:flex;
    justify-content:center;
    color:white;
    width: 100vw;
    height: 100vh;
    background-position:center;
    background-size:cover;
    background-image: url(${HomeFont});
`;

const Me = styled.div`
    margin-top: 11vh;
    margin-left: 8vw;
    font-size:1.2rem;
    font-family: 'Alfa Slab One', sans-serif;
    
`;

class Home extends React.Component {
    
render() {
    return(
        <Body id="home">
            <Me>
    <h1>{this.props.langFr?"Bonjour,":"Hello,"}</h1>
            <h1>{this.props.langFr?"Je suis Wenvael Laskar!":"I'm Gwenvaël Laskar!"}</h1>
            <h1>{this.props.langFr?"Developpeur Web novice":"Web Developper junior"}</h1>
            </Me>
        </Body>
    )

}
}


export default Home;