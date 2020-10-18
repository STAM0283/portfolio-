import React from 'react';
import check from "../images/check.png";
import sport from "../images/sport.svg";
import game from "../images/game.png";
import travel from "../images/travel.png";
import coding from "../images/coding.svg";
import innovation from "../images/innovation.svg";
import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import javascript from "../images/javascript.png"; 
import node_js from "../images/node_js.png";
import mysql from "../images/mysql.svg";
import bootstrap from "../images/bootstrap.svg";
import react from "../images/react.svg";

const Competences = () => {
    return (
        <div className="competences">
            <div style={{ height: "70%", textAlign: "start" }} className = "languages">
                <h2>LANGUAGES ET PLATEFORMES</h2>
                <h3>HTML5<label htmlFor="file"></label>
                <img src = {html5} alt="icone html5" /></h3>
                <h3>CSS3<label htmlFor="file"></label>
                <img src = {css3} alt="icone css3" /></h3>
                <h3>JAVASCRIPT <label htmlFor="file"></label>
                <img src = {javascript} alt="icone javascript" /></h3>
                <h3>NODE JS <label htmlFor="file"></label>
                <img  style={{width: "10%"}} src = {node_js} alt="icone node js" /></h3>
                <h3>MYSQL <label htmlFor="file"></label>
                    <img src={mysql} alt="icone mysql" /></h3>
                <h2>FRAMEWORK ET BIBLIOTHÈQUE</h2>
                <h3>BOOTSTRAP <label htmlFor="file"></label>
                <img src={bootstrap} alt="icone bootstrap"/></h3>
                <h3>REACT JS <label htmlFor="file"></label>
                <img src={react} alt="icone react js"/></h3>
                <h3 style={{color:"#006400"}}>EXPRESS JS <label for="file"></label></h3>
                <h3 style={{color:"#8A2BE2"}}>GATSBY JS <label for="file"></label></h3>


            </div>
            <section className = "otherCompetences">
                <div style={{ textAlign: "start" , height: "255px"}}>
                    <h2>AUTRES COMPETENCES</h2>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> GIT</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> GITHUB</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> SCRUM</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> VSCODE</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> POSTMAN</h3>


                </div>
                <div style={{ textAlign: "start", height: "180px" }}>
                    <h2>LANGUES</h2>
                    <h3>FRANÇAIS : <span style={{ fontStyle: "oblique", color: "DodgerBlue" }}>COURANT</span></h3>                
                    <h3>ARABE  : <span style={{ fontStyle: "oblique", color: "DodgerBlue" }}>COURANT</span></h3>                   
                    <h3>ANGLAIS : <span style={{ fontStyle: "oblique", color: "DodgerBlue" }}>INTERMÉDIAIRE</span></h3>
                </div>
                <div style={{ textAlign: "start" }}>
                    <h2>INTERETS</h2>
                    <h3><img src={coding} alt="" />DEVELOPEMENT WEB</h3>
                    <h3><img src={innovation} alt=""/>INNOVATION</h3>
                    <h3><img src={sport} alt=""/>BASKETBALL</h3>
                    <h3><img src={game} alt=""/>JEUX VIDEOS</h3>
                    <h3><img src={travel} alt=""/>VOYAGER</h3>
                </div>
            </section>

        </div>
    );
};

export default Competences;