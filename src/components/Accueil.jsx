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
                            Fort de ma passion pour le domaine du développement web et un
                            grand sens de la curiosité, je suis une personne dynamique,
                            rigoureuse, et très investie dans mon travail.
                            je souhaite intégrer une entreprise dynamique, dont le vecteur de
                            réussite et la dimension humaine sont primordiales, mais aussi 
                            une entreprise qui saura m'accompagner pour atteindre mon vrai potentiel.
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