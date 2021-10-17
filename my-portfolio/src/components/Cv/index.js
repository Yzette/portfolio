import React from 'react';
import { Link } from "react-router-dom";

import back from '../../assets/icons/back.svg';
import resume from '../../assets/icons/resume.svg';
import education from '../../assets/icons/education.svg';
import teaching from '../../assets/icons/teaching.svg';
import office from '../../assets/icons/office.svg';
import nihon from '../../assets/icons/japan-flag.svg';
import curiculum from '../../assets/docs/heutte.pdf';

import './cv.scss';

const Cv = () => (
    <div className="cv">
        <Link to="/">
            <img className="cv_back" src={back} alt="retour page précédente" />
        </Link>
        <h1 className="cv_title">Curiculum vitae</h1>
        <div className="cv_link">
            <p className="cv_link_legend">Mon CV complet ici</p>
            <a href={curiculum} download>
                <img src={resume} alt="lien vers mon cv"/>
            </a>
        </div>
             
        <div className="cv_items">
            <div className="cv_item">
                <div className="cv_item_title_container">
                    <img className="cv_item_logo" src={education} alt="certification"/>
                    <h2 className="cv_item_title">Titre professionnel de Développeuse Web/Web mobile</h2>
                </div>
                <p className="cv_item_subtitle">
                    Ecole O'clock, formation intensive 6 mois (2020 - 2021)
                </p>
                <p className="cv_item_text">
                    <ul>
                        <li>Socle 3 mois: HTML, CSS, PHP, Javascript, POO et MVC</li>
                        <li>Spécialisation 1 mois: React / React-Redux</li>
                        <li>Projet d'équipe avec application des méthodes Scrum 1mois:
                            <br/>  O'Rando, site collaboratif proposant la création de randonnées et la participation à celles-ci.</li>
                    </ul>
                </p>
                <div className="cv_item_line"></div>
            </div>
            <div className="cv_item">
                <div className="cv_item_title_container">
                    <img className="cv_item_logo" src={education} alt="certification"/>
                    <h2 className="cv_item_title">Certification Opquast</h2>
                </div>
                <p className="cv_item_subtitle">
                    Maîtrise de la qualité en projet Web - 900 points
                </p>
                <p className="cv_item_text">
                    <ul>
                        <li>Maîtriser le vocabulaire et les métiers du projet Web</li>
                        <li>Prendre en compte la diversité et les exigences des utilisateurs</li>
                        <li>Connaître les bonnes pratiques, leur conception et leur utilisation</li>
                        <li>Utiliser une check-list qualité Web</li>
                        <li>Prévenir les risques, renforcer l’assurance qualité Web</li>
                    </ul>
                </p>
                <div className="cv_item_line"></div>
            </div>
            <div className="cv_item">
                <div className="cv_item_title_container">
                    <img className="cv_item_logo" src={office} alt="cosium"/>
                    <h2 className="cv_item_title">Responsable Tiers-Payant - Formatrice sur Logiciel</h2>
                </div>
                <p className="cv_item_subtitle">
                    Cosium - Editeur de logiciels pour opticiens - Versailles <br/> Fevrier 2016 - juillet 2019
                </p>
                <p className="cv_item_text">
                    <ul>
                        <li>Gestion Tiers-Payant</li>
                        <li>Création de documentation concernant l'utilisation du logiciel pour les utilisateurs</li>
                        <li>Support (téléphonique, test fonctionnalités et qualité, suivi des résolutions</li>
                        <li>Formation de la clientèle sur le logiciel</li>
                    </ul>
                </p>
                <div className="cv_item_line"></div>
            </div>
            <div className="cv_item">
                <div className="cv_item_title_container">
                    <img className="cv_item_logo" src={nihon} alt="logo japon"/>
                    <h2 className="cv_item_title">Séjours au Japon</h2>
                </div>
                <p className="cv_item_subtitle">
                    Tokyo - 2012 &#38; 2015
                </p>
                <p className="cv_item_text">
                    <ul>
                        <li>Etude de la langue Japonaise à l'école Toshin</li>
                        <li>Vendeuse/serveuse en boulangerie - Le Coeur Pur <br/> Gestion de la boutique, caisse, Service aide à la clientèle</li>
                        <li>Serveuse en restauration - Monna Lisa <br/> Accueil et service de la clientèle japonaise</li>
                    </ul>
                </p>
                <div className="cv_item_line"></div>
            </div>
            <div className="cv_item">
                <div className="cv_item_title_container">
                    <img className="cv_item_logo" src={teaching} alt="iufm"/>
                    <h2 className="cv_item_title">Assistante d'éducation - Cours particuliers</h2>
                </div>
                <p className="cv_item_subtitle">
                    Lycée Elisa Lemonnier - Rouen - 2009 - 2011 <br/> Acadomia 2007 - 2011
                </p>
                <p className="cv_item_text">
                    <ul>
                        <li>Enseignement des sciences</li>
                        <li>Administratif</li>
                        <li>Soutien scolaire</li>
                        <li>Internat</li>
                    </ul>
                </p>
                <div className="cv_item_line"></div>
            </div>
            <div className="cv_item">
                <div className="cv_item_title_container">
                    <img className="cv_item_logo" src={teaching} alt="iufm"/>
                    <h2 className="cv_item_title">Préparation CAPES</h2>
                </div>
                <p className="cv_item_subtitle">
                    IUFM - Rouen - 2007 - 2009
                </p>
                <p className="cv_item_text">
                    <ul>
                        <li>Préparation CAPES sciences-physiques</li>
                        <li>Stage d'observation</li>
                    </ul>
                </p>
                <div className="cv_item_line"></div>
            </div>
            <div className="cv_item">
                <div className="cv_item_title_container">
                    <img className="cv_item_logo" src={education} alt="certification"/>
                    <h2 className="cv_item_title">Licence Sciences Physiques</h2>
                </div>
                <p className="cv_item_subtitle">
                    Université de Rouen - Le Madrillet - 2006
                </p>
                
                <div className="cv_item_line"></div>
            </div>
        </div>
        
        

    </div>
);

export default Cv;