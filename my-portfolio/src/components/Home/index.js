import React from "react";
import PresentationSmall from "./PresentationSmall";
import MenuPage from "./MenuPage";

import './home.scss';


const Home = () => (
    <div className="home">
        <PresentationSmall />
        <MenuPage />
    </div>
);

export default Home;