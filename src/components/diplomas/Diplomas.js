import React from "react";
import "./diplomas.css";

const Diplomas = (props) => (
  <div className="diploma">
    <span className="diploma__date">{props.date}</span>
    <h3 className="diploma__institution">{props.institution}</h3>
    <h4 className="diploma__link">{props.link}</h4>
  </div>
);

export default Diplomas;
