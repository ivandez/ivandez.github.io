import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setIsOpen] = useState(false);

  let className = "hidden px-3 text-xl lg:inline-block cursor-pointer";

  if (open === true) {
    className = "px-3 text-xl lg:inline-block cursor-pointer";
  }

  /**
   * TODO
   * 1 mover el menu de hamburgesa a la darecha del todo LISTO
   * 2 hacer mas suave la animacion de abrir el menu
   * 3 Crear el menu de desktop LISTO
   * 4 aumentar de tamaño el menu hamburgesa
   */

  return (
    <div className="bg-myColor p-2">
      <nav className="text-white lg:inline-block">
        <div className="grid grid-rows-1 grid-cols-2 lg:inline">
          <span className="text-2xl font-permanentMarker">Iván Méndez</span>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setIsOpen(!open)}
            className="self-center justify-self-end lg:hidden"
          />
        </div>
        <div className="lg:inline-block">
          <ul className={className}>
            <Link
              to="about"
              smooth={true}
              duration={1500}
              className={className}
            >
              <li className="navbar__link">sobre mí</li>
            </Link>
            <Link
              to="work-experience"
              smooth={true}
              duration={1500}
              className={className}
            >
              <li className="navbar__link">experiencia laboral</li>
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={1500}
              className={className}
            >
              <li className="navbar__link">Formación</li>
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={1500}
              className={className}
            >
              <li className="navbar__link">proyectos</li>
            </Link>
            <Link
              to="abilities"
              smooth={true}
              duration={1500}
              className={className}
            >
              <li className="navbar__link">habilidades</li>
            </Link>
            <Link
              to="diplomas"
              smooth={true}
              duration={1500}
              className={className}
            >
              <li className="navbar__link">diplomas</li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              className={className}
            >
              <li className="navbar__link">contacto</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
