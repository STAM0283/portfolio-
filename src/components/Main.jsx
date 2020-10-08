import React from 'react';
import {Switch, Route} from "react-router-dom";
import Accueil from "./Accueil";
import Experience from "./Experience";
import Formation from "./Formation";
import Competences from "./Competences"; 
import Portfolio from "./Portfolio";
import Contact from "./Contact"; 

const Main = () => {
    return (
        <div className = "main">
            <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/formation">
            <Formation />
          </Route>
          <Route exact path="/competences">
            <Competences />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
    );
};

export default Main;