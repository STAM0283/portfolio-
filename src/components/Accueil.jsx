import React from "react";
import photo_amine from "../images/photo_amine.png";
import photo_amine2 from "../images/photo_amine.jpg";

const Accueil = () => {
    return (
        <div className="accueil">
            <div className="profile_pro">

                <h1 style={{ color: "coral", fontSize: "xx-large", transition: "all 1s ease-out" }}>AMINE STAMBOULI</h1>
                <h1 className="poste" style={{ transition: "all 3s ease-out" }}>Develloppeur web React JS/ Node JS</h1>
                <img className="profile-picture2" src={photo_amine2} alt="profile_picture" />
                <div className="profile">
                    <div className="profile_paragraphe">
                        <p>
                            Après un parcours de 5 ans en tant que cogérant, dont 4 ans dans le
                            commerce ambulant et 1 an dans la restauration. Mon projet
                            professionnel est de m'orienter vers un domaine qui me passionne
                            énormément, qui est le développement web et mobile.Depuis début 2019
                            j'ai commencé à suivre des cours et à m'auto-former à la profession
                            grâce à des formations en ligne (Udemy, Openclassrooms .etc)
                            Actuellement je suis en formation développeur React JS/Node JS, à la
                            Wild Code School de Lyon.
                       </p>
                    </div>
                    <div style={{ width: "50%", padding: "0%" }}>
                        <img
                            className="profile-picture"
                            style={{ marginBottom: "15%", width: "85%", transition: "all 3s ease-out" }}
                            src={photo_amine}
                            alt="profile"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;