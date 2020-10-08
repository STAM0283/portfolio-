import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom"; 

const NavBar = () => {
    return (
        <div className = "navBar">
            <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="current" to="/">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg"
              >
                ACCUEIL
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/experience">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
                EXPERIENCE
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/formation">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            FORMATION
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/competences">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            COMPETENCES
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/portfolio">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            PORTFOLIO
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/contact">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            CONTACT MAIL
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
        </div>
    );
};

export default NavBar;