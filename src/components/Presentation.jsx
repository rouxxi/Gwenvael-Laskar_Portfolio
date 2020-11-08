import React from 'react';
import styled from 'styled-components';
import tete from './img/photo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import linkedin from './img/lindin.png';
import github from './img/github.png';
import cv from './img/CV.png';
import npm from './img/npm.png';
import js from './img/js.png';
import html from './img/html5.png';
import css from './img/css3.png';
import git from './img/git.png';
import rere from './img/react.png';
import banner from './img/banner4.jpg'

const Profil = styled.div`
    display:flex;
    margin: 1rem;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
`;

const Head = styled.img`
   border:1px solid rgba(0,0,0,0.5);
   box-shadow:1px 1px 1px 1px rgba(0,0,0,0.2);
   width:250px;
   height:325px;
`;

const Description = styled.div`
    padding: 1.2em;
    width:50vw;
    min-width: 300px;
    text-align:justify;
`;

const Presentationfont = styled.div`
    min-height:fit-content;
    padding:20px 20px 1rem 20px;
    text-align:center;
    background-color:white;
`;

const H2 = styled.h2`
    margin-top:0;
    padding: 30px 0px 10px  0px;
`;

const SocialLink = styled.div`
    margin: 20px 0px;
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    
    div{
        cursor: pointer;
    }
`;

const Skills = styled.div`
    margin: 20px 0px;
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
`;

const Icone = styled.img`
    width:70px;
    height:70px;
    margin: 10px 20px 10px 20px;
`;

const Internship = styled.div`
    text-align:center;
    margin: 50px 2rem 1em 2rem;
    border: 1px solid #140f30;
    background-position: center;
    background-size: cover;
    background-image:url(${banner});
    box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.4);
    color:white;
`; 


function Presentation() {
    AOS.init();
    return(
        <div>
        <Presentationfont>
            <H2 id="Presentation" data-aos="fade-right">Presentation</H2>
        
        <Profil >
            <Head src={tete} alt="tete" data-aos="fade-left"/>
            <Description data-aos="fade-left" >
                <p>After worked some years on many areas, i'm doing a conversion into dev Web! I'm a motivated person at work, so i integrate the WildCodeSchool for training myself at the professionnal expectation.</p>
            <p>At this moment i'm still a seed who's growing. I need a first experience into entrprise, and later being a real Web Developer!!</p>
            </Description>
        </Profil>

        <H2 data-aos="fade-right">Skills</H2>
        <Skills data-aos="fade-right">
        <Icone src={js} />
        <Icone src={npm} />
        <Icone src={html} />
        <Icone src={css} />
        <Icone src={git} />
        <Icone src={rere} />
        </Skills>
        <H2 data-aos="fade-left">Stay in touch</H2>
        <SocialLink data-aos="fade-left">
        <a href="https://www.linkedin.com/in/gwenvael-laskar-39096a1b8/"> <Icone src={linkedin} /> </a>
        <a href="https://github.com/rouxxi"> <Icone src=  {github} /></a>
        <a href="https://drive.google.com/file/d/1hDRmvyQMrikQk-6sk6YZukDC8ARcxZwT/view?usp=sharing"><Icone src=  {cv} /></a>
        </SocialLink>
        {/* <Internship data-aos="fade-up">
         <H2> I'm rescearching an internship in dev Front-End react for 4 months.</H2>
         <H2> Near Nantes from 15 february to 11 june 2021!</H2>
        </Internship> */}
        </Presentationfont>
         </div>
    )
}

export default Presentation;