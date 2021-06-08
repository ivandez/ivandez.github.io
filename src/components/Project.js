import React from "react";

const Project = (props) => {
  let demoLink = props.demo;

  if (demoLink) {
    return ProjectHasDemoLink(props);
  } else {
    return ProjectDoesNotHasDemoLink(props);
  }
  function ProjectHasDemoLink(props) {
    return (
      <div className="flex items-center bg-white text-center p-3 my-2">
        <div className="">
          <img src={props.img} alt="programming-tech-img"></img>
        </div>
        <div>
          <h2 className="text-xl">{props.title}</h2>
          <p className="text-gray-500 my-2 leading-tight">
            {props.description}
          </p>
          <a
            className="text-myColor"
            href={props.repository}
            target="_blank"
            rel="noreferrer"
          >
            Ver repositorio
          </a>
          <div>
            <a
              className="proyect__link"
              href={props.demo}
              target="_blank"
              rel="noreferrer"
            >
              Ver online
            </a>
          </div>
        </div>
      </div>
    );
  }

  function ProjectDoesNotHasDemoLink(props) {
    return (
      <div className="flex items-center bg-white text-center p-3 my-2">
        <div className="">
          <img src={props.img} alt="programming-language-img"></img>
        </div>
        <div className="project__info">
          <h2 className="text-xl">{props.title}</h2>
          <p className="text-gray-500 my-2 leading-tight">
            {props.description}
          </p>
          <a
            className="text-myColor"
            href={props.repository}
            target="_blank"
            rel="noreferrer"
          >
            Ver repositorio
          </a>
        </div>
      </div>
    );
  }
};

export default Project;
