import React from "react";

const Abilities = (props) => {
  const listAbilities = props.abilities.map((element) => (
    <li className="inline-block bg-gray-200 m-1 py-1 px-2" key={element}>
      {element}
    </li>
  ));

  return (
    <div className="text-center">
      <ul>{listAbilities}</ul>
    </div>
  );
};

export default Abilities;
