import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const [open, setIsOpen] = useState(false);

  let className = "navbar__link";

  if (open === true) {
    className = "navbar__link--show";
  }

  return (
    <nav className="navbar">
      <span className="navbar__home">Iván Méndez</span>
      <span className={className}>Acerca de mí</span>
      <span className={className}>Proyectos</span>
      <span className={className}>Habilidades</span>
      <span className={className}>Contactacme</span>

      <button onClick={() => setIsOpen(!open)} className="navbar__toggler">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default NavBar;
