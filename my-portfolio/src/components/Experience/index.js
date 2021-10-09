import React from 'react';
import { Link } from "react-router-dom";

import './experience.scss';

import school from '../../assets/images/school.jpg';
import japan from '../../assets/images/japan.jpg';
import matrix from '../../assets/images/matrix.jpg';
import back from '../../assets/icons/back.svg';
import teaching from '../../assets/icons/school.svg';


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
                <h3>Qualités nécessaires</h3>
                <div className="experience_item_list_1">
                    <ul>
                        <li>toto</li>
                        <li>toto</li>
                        <li>toto</li>
                    </ul>
                </div>
                <h3>Tâches accomplies</h3>
                <div className="experience_item_list_2">
                    <ul>
                        <li>toto</li>
                        <li>toto</li>
                        <li>toto</li>
                    </ul>
                </div>
            
            </div>
            <div className="experience_line"></div>
            <div className="experience_item">
                <img className="experience_item_image" src={school} alt="image ecole"/>
                <h2>L'enseignement</h2>
                <img src={teaching} alt="icone ecole"/>
                <h3>Qualités nécessaires</h3>
                <div className="experience_item_list_1">
                    <ul>
                        <li>toto</li>
                        <li>toto</li>
                        <li>toto</li>
                    </ul>
                </div>
                <h3>Tâches accomplies</h3>
                <div className="experience_item_list_2">
                    <ul>
                        <li>toto</li>
                        <li>toto</li>
                        <li>toto</li>
                    </ul>
                </div>
            
            </div>
            <div className="experience_line"></div>
            <div className="experience_item">
                <img className="experience_item_image" src={school} alt="image ecole"/>
                <h2>L'enseignement</h2>
                <img src={teaching} alt="icone ecole"/>
                <h3>Qualités nécessaires</h3>
                <div className="experience_item_list_1">
                    <ul>
                        <li>toto</li>
                        <li>toto</li>
                        <li>toto</li>
                    </ul>
                </div>
                <h3>Tâches accomplies</h3>
                <div className="experience_item_list_2">
                    <ul>
                        <li>toto</li>
                        <li>toto</li>
                        <li>toto</li>
                    </ul>
                </div>
            
            </div>
            
            
        </div>
    </div>
);

export default Experience;