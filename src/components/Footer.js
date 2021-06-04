import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white text-center py-2">
      <div>
        <p>Iván Méndez {year}</p>
      </div>
        <div className="my-2">
          <FontAwesomeIcon
            onClick={() => scroll.scrollToTop(1000)}
            icon={faArrowCircleUp}
            className="text-xl cursor-pointer hover:text-myColor transition duration-300"
          ></FontAwesomeIcon>
        </div>
        <div className="flex justify-evenly space-b">
          <a
            href="https://www.linkedin.com/in/iv%C3%A1n-m%C3%A9ndez-rodr%C3%ADguez-43b6b2175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.instagram.com/ivan_mendez_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://github.com/ivandez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl"
            ></FontAwesomeIcon>
          </a>
        </div>
    </div>
  );
}

export default Footer;
