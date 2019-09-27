import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Casa de Ranquines
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink className="nav-item nav-link" to="/collaborators">
          Colaboradores
        </NavLink>
        <NavLink className="nav-item nav-link" to="/anniversaries">
          Aniversariantes
        </NavLink>
        {!user && (
          <React.Fragment>
            <NavLink className="nav-item nav-link" to="/login">
              Fazer login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Criar conta
            </NavLink>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            {user.name}
            <NavLink className="nav-item nav-link" to="/logout">
              Sair
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
