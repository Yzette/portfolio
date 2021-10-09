import React from 'react';
import { Link } from 'react-router-dom';

import './whoAmI.scss';

import back from '../../assets/icons/back.svg';
import arrow from '../../assets/icons/arrow.svg';


const WhoAmI = () => (
    <div className="whoAmI">
        <Link to="/">
            <img className="whoAmI_back" src={back} alt="retour page précédente" />
        </Link>
        <h1 className="whoAmI_title">Qui suis je?</h1>
        <div className="whoAmI_text">
            <p>Bonjour, Je m'appelle Alexandrine et j'ai 37 ans!</p>
            <p className="whoAmI_text_question">37 ans? tu faisais quoi avant?</p>
            <p>Hum... par où commencer? Commençons par le début! Etudiante en sciences physiques, je me prédestinais à l'enseignement. Finalement après une expérience, enrichissante, mais non concluante, en établissement scolaire, j'ai décidé d'abandonner ce projet. Même si à ce jour, je continue à apprécier l'enseignement. Attirée par la culture Japonaise depuis quelques années, j'ai donc saisi l'occasion à ce moment là de partir à la découverte de ce pays. Pensant que cela me laisserait un peu de temps pour réfléchir à une autre orientation.</p>
            <p>A mon retour en France, j'ai eu l'opportunité de travailler pour une entreprise qui developpe un logiciel de gestion pour les opticiens et audioprothésiste. Dans cette entreprise, j'ai occupé le poste de conseillière client et formatrice et au fur et à mesure de ma prise de responsabilité, j'ai fini par occuper le poste de responsable tiers-payant/formatrice.</p>
            <p className="whoAmI_text_question">Comment t'es venu l'envie de te reconvertir au métier de développeuse web?</p>
            <p>Lors de cette expérience j’avais de fréquents contacts avec l’équipe de développeurs. Au fil de ces discussions, je me suis découverte un intérêt pour ce qui se passait derrière l’interface utilisateur. J'avais très envie par moment d'aller moi-même explorer le code pour savoir pourquoi telle ou telle fonctionnalité rencontrait un souci.Je me suis donc lancée dans une reconversion</p>
            <p>Je suis donc partie à la recherche d’une formation. L’école O’Clock m’a permis de me former de manière intensive aux bases du développement (HTML, CSS, PHP, POO, Javascript etc.) de me spécialiser (en React) et enfin de travailler sur un projet en équipe que j’ai présenté à ma certification.</p>
            <p className="whoAmI_text_question">Que recherches tu actuellement?</p>
            <p>Maintenant que ma formation est finie et que j'ai obtenu mon titre professionnel, je recherche un stage ou un premier emploi qui me permettra de mettre en pratique ce que j'ai appris et de m'améliorer encore. J'ai encore beaucoup à apprendre et l'avantage de ce métier c'est qu'on continue à apprendre toute sa vie. C'est très stimulant!</p>
            <p className="whoAmI_text_question">Qu'attends tu de l'entreprise pour laquelle tu travailleras?</p>
            <p>J'espère trouver une entreprise bienveillante qui m'aidera à continuer cette formation en continue qu'est le métier de développeuse. Qui m'apprendra les bonnes pratiques et qui me fera participer.</p>
            <p className="whoAmI_text_question">Et toi qu'offriras tu à cette entreprise?</p>
            <p></p>
        </div>
        <img src={arrow} alt="retour haut de page" className="toto"/>
    </div>
);

export default WhoAmI;