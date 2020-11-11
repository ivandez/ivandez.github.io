import React from "react";
import "./container.css";

const Container = (props) => {
  return (
    <div className="container">
      <h1 className="container__title">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Container;
