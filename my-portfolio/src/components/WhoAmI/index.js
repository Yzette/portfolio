import React from 'react';
import { Link } from 'react-router-dom';

import './whoAmI.scss';

import back from '../../assets/icons/back.svg';
import baguette from '../../assets/icons/baguette.svg';


const WhoAmI = () => (
    <div className="whoAmI">
        <Link to="/">
            <img className="whoAmI_back" src={back} alt="retour page précédente" />
        </Link>
        <h1 className="whoAmI_title">Qui suis je?</h1>
        <div className="whoAmI_text">
            <p>Après un parcours divers et varié, je me suis reconvertie au métier de développeuse web.</p>
            <p>Étudiante en sciences physiques, je me prédestinais à l’enseignement. Finalement d’autres projets et objectifs ont fini par me mener à mon dernier emploi de formatrice/responsable tiers payant dans une entreprise qui s’occupait d’un logiciel de gestion.</p>
            <p>Lors de cette expérience j’avais de fréquents contacts avec l’équipe de développeurs. Au fil de ces discussions, je me suis découverte un intérêt pour ce qui se passait derrière l’interface utilisateur.</p>
            <p>Je suis donc partie à la recherche d’une formation. L’école O’Clock m’a permis de me former de manière intensive aux bases du développement (HTML, CSS, PHP, POO, Javascript etc.) de me spécialiser (en React) et enfin de travailler sur un projet en équipe que j’ai présenté à ma certification.</p>
        </div>
        <img src={baguette} alt="retour haut de page" className="toto"/>
    </div>
);

export default WhoAmI;