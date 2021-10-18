import React from 'react';
import { Link } from "react-router-dom";

import hachiko from '../../assets/images/hachiko.jpg';
import hanami from '../../assets/images/hanami.jpg';
import hanami2 from '../../assets/images/hanami2.jpg';
import inari from '../../assets/images/inari.jpg';
import kamakura from '../../assets/images/kamakura.jpg';
import kanazawa from '../../assets/images/kanazawa.jpg';
import kinkakuji from '../../assets/images/kinkakuji.jpg';
import tomato from '../../assets/images/tomato-ramen.jpg';
import macha from '../../assets/images/macha.jpg';
import miyajima from '../../assets/images/miyajima.jpg';
import mochi from '../../assets/images/mochi.jpg';
import mochi2 from '../../assets/images/mochi2.jpg';
import mochi3 from '../../assets/images/mochi3.jpg';
import samurai from '../../assets/images/samurai.jpg';
import shibuya from '../../assets/images/shibuya-cross.jpg';
import shika from '../../assets/images/shika.jpg';
import shinjuku from '../../assets/images/shinjuku.jpg';
import shiro from '../../assets/images/shiro.jpg';
import tea from '../../assets/images/tea.jpg';
import tokyo from '../../assets/images/tokyo.jpg';

import './japanPictures.scss';

const JapanPictures = () => (
    <div className="japanPictures">
        <img className="japanPictures_item" src={hachiko} alt="photo"/>
        <img className="japanPictures_item" src={hanami} alt="photo"/>
        <img className="japanPictures_item" src={hanami2} alt="photo"/>
        <img className="japanPictures_item" src={inari} alt="photo"/>
        <img className="japanPictures_item" src={kamakura} alt="photo"/>
        <img className="japanPictures_item" src={kanazawa} alt="photo"/>
        <img className="japanPictures_item" src={kinkakuji} alt="photo"/>
        <img className="japanPictures_item" src={tomato} alt="photo"/>
        <img className="japanPictures_item" src={macha} alt="photo"/>
        <img className="japanPictures_item" src={miyajima} alt="photo"/>
        <img className="japanPictures_item" src={mochi} alt="photo"/>
        <img className="japanPictures_item" src={mochi2} alt="photo"/>
        <img className="japanPictures_item" src={mochi3} alt="photo"/>
        <img className="japanPictures_item" src={samurai} alt="photo"/>
        <img className="japanPictures_item" src={shibuya} alt="photo"/>
        <img className="japanPictures_item" src={shika} alt="photo"/>
        <img className="japanPictures_item" src={shinjuku} alt="photo"/>
        <img className="japanPictures_item" src={shiro} alt="photo"/>
        <img className="japanPictures_item" src={tea} alt="photo"/>
        <img className="japanPictures_item" src={tokyo} alt="photo"/>
    </div>

);

export default JapanPictures;