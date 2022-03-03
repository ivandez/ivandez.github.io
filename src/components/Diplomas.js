import React from "react";
// import "./diplomas.css";

const Diplomas = (props) => (
  <div className="bg-gray-200 my-2 p-2 text-left">
    <span className="float-right text-gray-500">{props.date}</span>
    <h3 className="text-xl">{props.title}</h3>
    <a
      className="text-gray-500"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      Go to certificate
    </a>
  </div>
);

export default Diplomas;
