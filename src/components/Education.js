import React from "react";

const Education = (props) => (
  <div className="bg-white my-2 p-3 border border-gray-200 border-solid">
    <h3 className="text-xl">{props.institution}</h3>
    <h4 className="text-gray-500 mb-2">{props.degree}</h4>
  </div>
);

export default Education;
