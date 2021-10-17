import React from 'react';
import { Link } from "react-router-dom";

import './experience.scss';

import school from '../../assets/images/school.jpg';
import japan from '../../assets/images/japan.jpg';
import matrix from '../../assets/images/matrix.jpg';
import back from '../../assets/icons/back.svg';
import teaching from '../../assets/icons/school.svg';
import nihon from '../../assets/icons/japan-flag.svg';
import computer from '../../assets/icons/computer.svg';

const Experience = () => (
    <div className="experience">
        <Link to="/">
            <img className="experience_back" src={back} alt="retour page précédente" />
        </Link>
        <h1 className="experience_title">Expérience</h1>
        <p className="experience_introduction">Grâce à mes diverses expériences, j'ai pu acquérir des savoir-faire et même développer mes savoir-être.</p>
        <div className="experience_items">
            <div className="experience_line"></div>
            <div className="experience_item">
                <img className="experience_item_image" src={school} alt="image ecole"/>
                <h2>L'enseignement</h2>
                <img src={teaching} alt="icone ecole"/>
                <h3>Savoir-être</h3>
                <div className="experience_item_list_1">
                    <ul>
                        <li>Empathie / A l'écoute</li>
                        <li>Pédagogue</li>
                        <li>Patiente</li>
                        <li>Adaptable</li>
                        <li>Claire et concise</li>
                    </ul>
                </div>
                <h3>Tâches accomplies</h3>
                <div className="experience_item_list_2">
                    <ul>
                        <li>Préparation des cours</li>
                        <li>Correction des copies</li>
                        <li>Rédaction de compte rendu</li>
                        <li>S'adapter au public en formation (classe, cours privé, formation adulte)</li>
                    </ul>
                </div>
            
            </div>
            <div className="experience_line"></div>
            <div className="experience_item">
                <img className="experience_item_image" src={japan} alt="image ecole"/>
                <h2>Japon</h2>
                <img src={nihon} alt="icone ecole"/>
                <h3>Savoir-être</h3>
                <div className="experience_item_list_1">
                    <ul>
                        <li>Bonne capacité d'adaptation</li>
                        <li>Organisée</li>
                        <li>Curiosité</li>
                        <li>Sociable</li>
                        <li>Bonne capacité d'apprentissage</li>
                    </ul>
                </div>
                <h3>Tâches accomplies</h3>
                <div className="experience_item_list_2">
                    <ul>
                        <li>Voyage dans différentes villes</li>
                        <li>Apprentissage de la langue japonaise</li>
                        <li>Serveuse dans un restaurant</li>
                        <li>Vendeuse dans une boulangerie</li>
                        <li>Travail dans une langue étrangère</li>
                    </ul>
                </div>
            
            </div>
            <div className="experience_line"></div>
            <div className="experience_item">
                <img className="experience_item_image" src={matrix} alt="image ecole"/>
                <h2>Le monde du numérique</h2>
                <img src={computer} alt="icone ecole"/>
                <h3>Savoir-être</h3>
                <div className="experience_item_list_1">
                    <ul>
                        <li>Sérieuse</li>
                        <li>Rigoureuse</li>
                        <li>Bonne capacité d'analyse</li>
                        <li>Autonome</li>
                        <li>Créative</li>
                    </ul>
                </div>
                <h3>Tâches accomplies</h3>
                <div className="experience_item_list_2">
                    <ul>
                        <li>Analyse et diagnostic de l'origine d'un problème</li>
                        <li>Résolution à l'aide des developpeurs</li>
                        <li>Rédaction d'une demande auprès des développeurs</li>
                        <li>Tester, vérifier, explorer, inventorier les nouveautés d'un logiciel</li>
                        <li>Présenter et expliquer le fonctionnement d'un logiciel</li>
                    </ul>
                </div>
            
            </div>
            
            
        </div>
    </div>
);

export default Experience;