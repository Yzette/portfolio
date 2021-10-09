import React from "react";
import logo from '../../assets/images/logo-portfolio.png';
import { Link } from "react-router-dom";

import './header.scss';

const Header = () => (
    <header className="header">
        <Link to="/">
            <img src={logo} alt="logo portfolio" className="header_logo" />
        </Link>
    </header>
);

export default Header;