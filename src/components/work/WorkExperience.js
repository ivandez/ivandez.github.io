import React from "react";
// import "./work-experience.css";

const WorkExperience = (props) => (
  // <div class="container">
    <div className="work-experience-card bg-white my-2 p-3 border border-gray-200 border-solid">
      {/* <div className="work-experience-card__date">{props.date}</div> */}
      <h3 className="work-experience-card__company text-xl">{props.company}</h3>
      <h4 className="work-experience-card__employment text-gray-500 mb-2">{props.job}</h4>
      <p className="work-experience-card__description">{props.jobDescription}</p>
    </div>
  // </div>
);

export default WorkExperience;
