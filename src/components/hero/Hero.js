import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero-inner hero__container">
        <h1 className="hero__title">Iván Méndez</h1>
        <h2 className="hero__degree">Técnico Superior en Informática</h2>
        <h2 className="hero__degree">"Informatico autodidacta"</h2>
        <div className="hero__socials">
          <ul className="hero__list">
            <li className="hero__item">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hero__social"
              ></FontAwesomeIcon>
            </li>
            <li className="hero__item">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hero__social"
              ></FontAwesomeIcon>
            </li>
            <li className="hero__item">
              <FontAwesomeIcon
                icon={faGithub}
                className="hero__social"
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
