import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';

import back from '../../assets/icons/back.svg';
import helmet from '../../assets/icons/helmet.png';
import orando from '../../assets/icons/orando.svg';
import github from '../../assets/icons/github.svg';
import logo from '../../assets/images/logo-portfolio.png';
import coming from '../../assets/icons/coming-soon.png';

const Projects = () => (
    <div className="projects">
        <Link to="/">
            <img className="projects_back" src={back} alt="retour page précédente" />
        </Link>
        <h1 className="projects_title">Mes projets</h1>
        <div className="projects_introduction">
            <p>Voici les projets sur lesquels j'ai travaillé.</p>
            <p>Cette section est bien entendu en travaux, car je continue a travailler sur des projets personnels.</p>
            <img className="projects_introduction_icon" src={helmet} alt="chapeau illustrant les travaux"/>
        </div>
        <div className="projects_items">
            <div className="projects_item">
                <div className="projects-item_title">
                    <img className="projects_item_icon" src={orando} alt="icone projet orando"/>
                    <h2>O'Rando</h2>
                </div>
                <div className="projects_item_line"></div>
                <p className="projects_item_text">A l'occasion de ma formation, gestion et développement d'un projet from scratch : O’Rando.
                Il s’agit d’une application pour tous les randonneurs (du pratiquant occasionnel au passionné invétéré). Elle vous permet de proposer vos randonnées (description, point de départ, horaires etc.), mais aussi de participer à des randonnées proposées par d'autres. Vous avez même la possibilité de contacter un organisateur si besoin (pour obtenir plus de détails ou poser des questions).
                </p>
                <div className="projects_item_links">
                    <Link to="/projets/orando">
                    <p className="projects_item_links_more"> -> plus de détails </p>
                    </Link>
                    <a href="https://github.com/Yzette/O-Rando-React/tree/develop" target="_blank">
                        <img className="projects_item_links_github" src={github}/>
                    </a>
                </div>
            </div>
            <div className="projects_item">
                <div className="projects-item_title">
                    <img className="projects_item_icon" src={logo} alt="icone projet orando"/>
                    <h2>Mon portfolio</h2>
                </div>
                <div className="projects_item_line"></div>
                <p className="projects_item_text">A l'occasion de ma formation, gestion et développement d'un projet from scratch : O’Rando.
                Il s’agit d’une application pour tous les randonneurs (du pratiquant occasionnel au passionné invétéré). Elle vous permet de proposer vos randonnées (description, point de départ, horaires etc.), mais aussi de participer à des randonnées proposées par d'autres. Vous avez même la possibilité de contacter un organisateur si besoin (pour obtenir plus de détails ou poser des questions).
                </p>
                <div className="projects_item_links">
                    <Link to="/projets/mon-portfolio">
                    <p className="projects_item_links_more"> -> plus de détails </p>
                    </Link>
                    <a href="https://github.com/Yzette/portfolio/tree/main/my-portfolio" target="_blank">
                        <img className="projects_item_links_github" src={github}/>
                    </a>
                </div>
            </div>
            
        </div>
        <div className="projects_soon">
            <img className="projects_soon_icon" src={coming} alt="projets à venir"/>
            <p>En travaux...</p>
        </div>
    </div>
);

export default Projects;