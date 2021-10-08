import React from "react";
import PresentationSmall from "./PresentationSmall";
import MenuPage from "./MenuPage";

import './home.scss';


const Home = () => (
    <main className="home">
        <PresentationSmall />
        <MenuPage />
    </main>
);

export default Home;