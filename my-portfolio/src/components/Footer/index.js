import React from 'react';
import { Link } from "react-router-dom";
import octopus from '../../assets/icons/octopus.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';

import './footer.scss';


const Footer = () => (
    <footer className="footer">
        <Link to="/">
            <img className="footer_icon_tako" src={octopus}/>
        </Link>
        <div className="footer_icons_right">
            <a href="https://www.linkedin.com/in/alexandrine-heutte-71830a10a" target="_blank">
                <img className="footer_icon_linkedin" src={linkedin}/>
            </a>
            <a href="https://github.com/Yzette" target="_blank">
                <img className="footer_icon_github" src={github}/>
            </a>
        </div>
    </footer>

);

export default Footer;