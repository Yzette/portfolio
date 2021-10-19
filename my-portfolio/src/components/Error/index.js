import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/icons/error.svg';
import sad from '../../assets/icons/sad.svg';

import './error.scss';


const Error = () => (
    <div className="error">
        <h1 className="error_title">
            <span className="error_title_num">4 </span>
            <img className="error_title_icon" src={error} alt="icone erreur" />
            <span className="error_title_num"> 4</span>
        </h1>
        <p className="error_text"> Oops, 
            <img className="error_text_icon" src={sad} alt="icone triste" />
            cette page n'existe pas
        </p>
        <Link className="error_return" to="/">
            <h2 className="error_return_text">Retour page Accueil</h2>
        </Link>
    </div>
);

export default Error;