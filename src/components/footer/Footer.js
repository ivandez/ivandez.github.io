import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__owner">
        <p>Iván Méndez {year}</p>
      </div>
      <div>
        <ul className="footer__list">
          <li className="footer__item">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer__social"
            ></FontAwesomeIcon>
          </li>
          <li className="footer__item">
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer__social"
            ></FontAwesomeIcon>
          </li>
          <li className="footer__item">
            <FontAwesomeIcon
              icon={faGithub}
              className="footer__social"
            ></FontAwesomeIcon>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
