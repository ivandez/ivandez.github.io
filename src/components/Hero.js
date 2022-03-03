import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="lg:bg-centerCustom lg:bg-fixed bg-hero bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center text-center flex-col text-white">
      <div className="text-2xl lg:text-4xl">
        <h1 className="font-permanentMarker">Iván Méndez</h1>
        <h2>Higher Technician in Computer Science</h2>
        <h2>Web developer</h2>
      </div>
      <div className="m-3">
        <ul className="hero__list -space-x-24 text-3xl lg:text-5xl lg:-space-x-40">
          <li className="hero__social">
            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-m%C3%A9ndez-rodr%C3%ADguez-43b6b2175/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="hero__social">
            <a
              href="https://www.instagram.com/ivandez_dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="hero__social">
            <a
              href="https://github.com/ivandez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Hero;
