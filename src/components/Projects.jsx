import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ecureuil from './img/Projet1.png';
import projet0 from './img/Projet0.png'
import projet2 from './img/projet2.png'
import projectbanner from './img/banner7proj.jpg'

const Projects = styled.div`
    display:flex;
    align-content:center;
    flex-wrap:wrap;
    justify-content:center;
    
`;

const ProjectNum = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin: 30px;
    color:white;
    height:fit-content;
    a{
        margin-top:30px;
        font-size:25px;
        padding:0;
        text-decoration:none;
        text-decoration: underline;
        color: white;
    }
`;

const Thumbnail = styled.img`
    width:300px;
    height:342px;
`;

const Description = styled.div`
    width:300px;
    height: 342px;
    background-color:#1e1e1f;
    color:white;
    border:1px solid black rgba(0,0,0,0.8);
    h2,p{
        margin: 1rem;
    }

`;

const TitleProjects = styled.div`
    border: 1px solid black rgba(0,0,0,0.3);
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
    font-size:30px;
    margin: 40px 0 30px 0;
    width:fit-content;
    display:flex;
    align-content:center;
    justify-content:center;
    background-image: url(${projectbanner});
    background-position:center;
    background-size:cover;
    color: white;

    div{
        background-color:rgba(0,0,0,0.4);
        padding: 15px;

    }
`;

const Firstdiv = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('./components/img/fond.jpg');
`;




class Project extends React.Component{
    constructor(props){
        super(props);
        this.stage={projet1:false, projet2:false, projet3:false}
    }
    render(){
        AOS.init();
        return(
            <Firstdiv>
            <TitleProjects  id="Projects">
                <div>
                <h2>Some achievements</h2>
                </div>
            </TitleProjects>
            <Projects>
                <ProjectNum data-aos="fade-up">
                <Thumbnail src={projet0}></Thumbnail> 
                  <Description>
                      <h2>Atlantic Box Office</h2>
                      <p>it's a rework of an old web site of a friend's entreprise. I did this before came to the WildCodeSchool</p>
                      <p>This web site need some work for finish it and put it on a web host</p>
                <a href='https://rouxxi.github.io/atlanticboxoffice.github.io/'> <p>Let's check!</p> </a>
                  </Description> 

                </ProjectNum>
                <ProjectNum data-aos="fade-up">
                
                    <Thumbnail src={ecureuil}></Thumbnail>
                  <Description>
                  <h2>AdopteUnEcureuil.com</h2>
                      <p>it's a fake web site for a projet, during the first month of the WildCodeSchool. The goal of this web site is to give the oportunity to give a good life for some squirrels wounded, and catch by association for medicine. People can adopt a squirrel if they want!!</p>    
                      <a href='https://rouxxi.github.io/AdopteUnEcureuil.github.io/index.html'>  <p>Let's check!</p></a>
                  </Description>
         
                </ProjectNum>
                <ProjectNum  data-aos="fade-up">
                <Thumbnail src={projet2}></Thumbnail> 
                  <Description>
                      <h2>VegeNantes Go</h2>
                      <p>Sill in progress....</p>
                      <p>It's a web site similar to pokémon GO, but with plants/trees/flowers !! The users can try to catch them all with Qrcode</p>    
                      <a href='https://www.figma.com/proto/lSD2QbVjzj2JgFfBJWCLfy/Herbier-nantais?node-id=173%3A93&scaling=min-zoom'><p>Let's check!</p></a>

               </Description>

                </ProjectNum>
            </Projects>
            </Firstdiv>
        )
    }
}

export default Project;