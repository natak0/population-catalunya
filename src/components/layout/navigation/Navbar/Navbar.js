import React from "react";
import { ReactComponent as HomeIcon } from "../../../../assets/icons/home.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar__menu">
      <a href="/" className="menu-logo">
        <HomeIcon />
      </a>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>
          Població dels municipis de Catalunya segregada per rang d'edat i sexe.
        </h1>
        <p>
          Informació elaborada per l'IDESCAT a partir del Padró municipal
          d'habitants. Dades del darrer padró disponible, any 2019-2020.
        </p>
      </div>
      {/*       <a href="/login" className="menu-login">
        <LoginIcon />
      </a> */}
    </nav>
  );
}

export default Navbar;
