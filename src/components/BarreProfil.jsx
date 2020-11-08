import React from "react";
import "./BarreProfil.css";

class Profil extends React.Component {

    render() {
        return ( 
            <div className="barreProfil" >
            <figure>
                <section className="Avatar">
                <h2>Gwenvael Laskar</h2>
                </section>
                <section className="infos-diverse">
                    <div>
                        <h4>Presentation</h4>
                        <p>Je suis une personne motivé et assidu au travail. Après avoir travailler dans différent domaines, je cherche actuellement à me reconvertir dans l'informatique. J'étudie les bases de la programmations dans une formation intensive de developpeur web a la WildCodeSchool, afin de créer un socle solide de compétances pour travailler ensuite de façon performante.</p>
                    </div>
                        <div className="hardSkills">
                        <h4>Hard skills</h4>
                        <p>Git/gitHub</p>
                        <p>VSCode</p>
                        <p> Terminal </p>
                        <p>Javascript natif</p>
                        <div className="jauge">
                            <div className="jauge-jsNatif"></div>
                        </div>
                        <p>React</p>
                        <div className="jauge">
                            <div className="jauge-react"></div>
                        </div>
                        <p>HTML/CSS</p>
                        <div className="jauge">
                            <div className="jauge-html-css"></div>
                        </div>
                    </div>
                   <div className="softSkill">
                   <h4>Soft skills</h4>
                    <p>Méthodes agiles : scrums </p>
                    <p> Avoir l’envie d’apprendre </p>
                    <p> S’adapter aux environnements </p>
                    <p> consiliant</p>
                   </div>
                   <div className="contact">
                    <h4>contact</h4>
                    <p>06.63.09.75.84</p>
                    <p>laskar.gwenvael@gmail.com</p>
                    <p>9 rue du clos roux, 44640, Le PELLERIN</p>
                    </div>

                    <div></div>
                    <div></div>
                </section>
            </figure>
            </div>
        )
    }

}

export default Profil;