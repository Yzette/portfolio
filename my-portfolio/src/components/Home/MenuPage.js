import React from "react";
import { Link } from "react-router-dom";

import egg from '../../assets/icons/egg.svg';
import katana from '../../assets/icons/katana.svg';
import origami from '../../assets/icons/origami.svg';
import folders from '../../assets/icons/folders.svg';

const MenuPage = () => (
    <div className="menuPage">
        <div className="menuPage_whoAmI">
            <Link to="/qui-suis-je" >
                <img src={egg} alt="icon qui suis je" className="menuPage_whoAmI_icon" />
                <h2>Qui suis je?</h2>
            </Link>
        </div>
        <div className="menuPage_experience">
            <Link to="/experience">
                <img src={katana} alt="icon experience" className="menuPage_experience_icon" />
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
            <Link to="/cv">
                <img src={folders} alt="icon cv" className="menuPage_cv_icon" />
                <h2>CV</h2>
            </Link>
        </div>
    </div>
);

export default MenuPage;