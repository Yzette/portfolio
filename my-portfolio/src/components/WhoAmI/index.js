import React from 'react';
import { Link } from 'react-router-dom';

import './whoAmI.scss';

import back from '../../assets/icons/back.svg';
import arrow from '../../assets/icons/arrow.svg';
import question from '../../assets/icons/question.svg';


const WhoAmI = () => (
    <div className="whoAmI">
        <Link to="/">
            <img className="whoAmI_back" src={back} alt="retour page précédente" />
        </Link>
        <h1 className="whoAmI_title">Qui suis-je?</h1>
        <div className="whoAmI_text">
            <p className="whoAmI_text_intro">Bonjour, Je m'appelle Alexandrine et j'ai 37 ans!</p>
            <div className="whoAmI_text_question_container">
                <img className="whoAmI_text_question_icon" src={question} alt="logo question"/>
                <p className="whoAmI_text_question">37 ans? Que faisais tu avant?</p>
            </div>
            <p>Hum... par où commencer? Commençons par le début! Etudiante en sciences physiques, je me prédestinais à l'enseignement. Finalement après une expérience, certes enrichissante en établissement scolaire, j'ai décidé d'abandonner ce projet. Même si à ce jour, je continue à apprécier l'enseignement et la transmission du savoir en général. <br/>Attirée par la culture Japonaise depuis quelques années, j'ai donc saisi l'occasion à ce moment là de partir à la découverte de ce pays.</p>
            <p>A mon retour en France, j'ai eu l'opportunité de travailler pour une entreprise qui developpe un logiciel de gestion pour les opticiens et audioprothésistes. Dans cette entreprise, j'ai occupé le poste de conseillière client et formatrice et au fur et à mesure de ma prise de responsabilité, j'ai fini par occuper le poste de responsable tiers-payant tout en continuant de former sur cette partie du logiciel.</p>
            <div className="whoAmI_text_question_container">
                <img className="whoAmI_text_question_icon" src={question} alt="logo question"/>
                <p className="whoAmI_text_question">Comment t'es venu l'envie de te reconvertir au métier de développeuse web?</p>
            </div>
            <p>A ce poste, j’avais de fréquents contacts avec l’équipe de développeurs. Au fil de ces discussions, je me suis découverte un intérêt pour ce qui se passait derrière l’interface utilisateur. J'avais très envie par moment d'aller moi-même explorer le code pour savoir pourquoi telle ou telle fonctionnalité rencontrait un souci. Je me suis donc lancée dans une reconversion.</p>
            <p>J'ai, dans un premier temps, réalisé un bilan de compétences pour être sure de mon choix. Une fois ce dernier confirmé, je suis donc partie à la recherche d’une formation. L’école O’Clock m’a permis de me former de manière intensive aux bases du développement (HTML, CSS, PHP, POO, Javascript etc.) de me spécialiser (en React) et enfin de travailler sur un projet en équipe que j’ai présenté lors de ma certification.</p>
            <div className="whoAmI_text_question_container">
                <img className="whoAmI_text_question_icon" src={question} alt="logo question"/>
                <p className="whoAmI_text_question">Que recherches-tu actuellement?</p>
            </div>
            <p>Maintenant que ma formation est finie et que j'ai obtenu mon titre professionnel, je recherche un stage ou un premier emploi qui me permettra de mettre en pratique ce que j'ai appris. Je souhaite apprendre les bonnes pratiques du code et m'améliorer. J'ai encore beaucoup à apprendre et l'avantage de ce métier c'est qu'on continue à apprendre toute sa vie. C'est très stimulant!</p>
            <div className="whoAmI_text_question_container">
                <img className="whoAmI_text_question_icon" src={question} alt="logo question"/>
                <p className="whoAmI_text_question">Qu'attends-tu de l'entreprise pour laquelle tu travailleras?</p>
            </div>
            <p>J'espère trouver une entreprise bienveillante qui m'aidera à continuer cette formation en continue qu'est le métier de développeuse. Qui m'apprendra les bonnes pratiques et qui me fera participer.</p>
            <div className="whoAmI_text_question_container">
                <img className="whoAmI_text_question_icon" src={question} alt="logo question"/>
                <p className="whoAmI_text_question">Et toi qu'offriras-tu à cette entreprise?</p>
            </div>
            <p>Ma bonne humeur! Mon enthousiasme pour l'apprentissage! Ma passion pour le chocolat!</p>
            <p>Plus sérieusement, je suis effectivement une personne enthousiaste, même si toujours un peu réservée au début. Je suis sérieuse et j'aime travailler en équipe (même si je suis tout à fait capable de travailler seule aussi).</p>
        </div>
        <img src={arrow} alt="retour haut de page" className="whoAmI_up"/>
    </div>
);

export default WhoAmI;