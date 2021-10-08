import React from "react";
import { Link } from "react-router-dom";

import kitsune from '../../assets/icons/kitsune.svg';
import samurai from '../../assets/icons/samurai.svg';
import origami from '../../assets/icons/origami.svg';
import suzuri from '../../assets/icons/suzuri.svg';

const MenuPage = () => (
    <div className="menuPage">
        <div className="menuPage_whoAmI">
            <Link to="/qui-suis-je" >
                <img src={kitsune} alt="icon qui suis je" className="menuPage_whoAmI_icon" />
                <h2>Qui suis je?</h2>
            </Link>
        </div>
        <div className="menuPage_experience">
            <Link to="">
                <img src={samurai} alt="icon experience" className="menuPage_experience_icon" />
                <h2>Experience</h2>
            </Link>
        </div>
        <div className="menuPage_project">
            <Link to="/projets">
                <img src={origami} alt="icon projets" className="menuPage_project_icon" />
                <h2>Projets</h2>
            </Link>
        </div>
        <div className="menuPage_cv">
            <a href="">
                <img src={suzuri} alt="icon cv" className="menuPage_cv_icon" />
                <h2>CV</h2>
            </a>
        </div>
    </div>
);

export default MenuPage;