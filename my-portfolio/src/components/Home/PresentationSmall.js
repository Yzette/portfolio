import React from "react";
import profile from '../../assets/images/photo-profile.jpg';


const PresentationSmall = () => (
    <div className="presentationSmall">
        <div className="presentationSmall_profile">
            <img className="presentationSmall_profile_image" src={profile} alt="image profile" />
        </div>
        <div className="presentationSmall_line"></div>
        <div className="presentationSmall_text">
            <h1>Alexandrine Heutte</h1>
            <h2>Développeuse web</h2>
            <p>Bienvenu sur mon site, j'espère qu'il vous permettra de faire connaissance avec moi. N'hésitez pas à me contacter pour plus d'informations.</p>
        </div>
    </div>
);

export default PresentationSmall;