import React from "react";
import logo from '../../assets/images/logo-portfolio.png';

import './header.scss';

const Header = () => (
    <header className="header">
        <img src={logo} alt="logo portfolio" className="header_logo" />
    </header>
);

export default Header;