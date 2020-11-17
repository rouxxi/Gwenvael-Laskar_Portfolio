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
import banner from './img/banner4.jpg';
import email from './img/icons8-mail-100.png';
import Mailto from 'react-protected-mailto';

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
    font-size:24px;
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
    font-size:28px;
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

const Transition = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    font-weight:bold;
    margin: 50px 2rem 1em 2rem;
`;


class Presentation extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        AOS.init();
        return (
            <div>
                <Presentationfont>
                    <H2 id="Presentation" data-aos="fade-right">{this.props.langFr?"Présentation":"Presentation"}</H2>
    
                    <Profil >
                        <Head src={tete} alt="tete" data-aos="fade-left" />
                        <Description data-aos="fade-left" >
                        <p >{this.props.langFr?"Après avoir travaillé dans différents domaines professionnels, j'ai choisi de me reconvertir dans le numérique, plus particulièrement dans le métier de développeur Web. Je suis une personne motivé, c'est pourquoi j'ai rejoins la WildCodeSchool pour apprendre, et m'entrainer a ce métier.":"After working many years in differents areas, I decided  to reconvert myself in Web Development. I'm a motivated person and that is why I decided to join  Wild Code School to be able to train for this job."}</p>
                        <p >{this.props.langFr?"Je suis a l'heure actuelle encore une petite pousse qui grandit. Je cherche un stage de 4mois dans la période du 15 février au 11 juin 2021, dans l'agglomération nantaise! ":"For the moment I am still a growing seed. I am looking for professional experience for a 4 month internship, from 15 february 2021 to the 11 june 2021, near Nantes! "}</p>
                        </Description>
                    </Profil>
                    <H2 data-aos="fade-right">{this.props.langFr?"Compétences":"Skills"}</H2>
                    <Skills data-aos="fade-right">
                        <Icone src={js} />
                        <Icone src={npm} />
                        <Icone src={html} />
                        <Icone src={css} />
                        <Icone src={git} />
                        <Icone src={rere} />
                    </Skills>
                    <H2 data-aos="fade-left">{this.props.langFr?"Restons en contacts":"Stay in touch"}</H2>
                    <SocialLink data-aos="fade-left">
                        <a href="https://www.linkedin.com/in/gwenvael-laskar-39096a1b8/"> <Icone src={linkedin} /> </a>
                        <a href="https://github.com/rouxxi"> <Icone src={github} /></a>
                        <a href="https://drive.google.com/file/d/1UpeYRgK7Rb-64aMpiQ7G3F6A4aG8KY_V/view?usp=sharing"><Icone src={cv} /></a>
                        <a href="mailto:laskar.gwenvael@gmail.cool"><Icone src={email} />  </a>
                    </SocialLink>

                    <Transition>
                    <p >{this.props.langFr?"Dans la section Projets ci-dessous vous pouvez voir l'ensemble des projets sur lesquels j'ai travaillé!":"In the next part you will see all projects that I worked on!"}</p>

                    </Transition>
                    {/* <Internship data-aos="fade-up">
             <H2> I'm rescearching an internship in dev Front-End react for 4 months.</H2>
             <H2> Near Nantes from 15 february to 11 june 2021!</H2>
            </Internship> */}
                </Presentationfont>
            </div>
        )
    }
}

export default Presentation;