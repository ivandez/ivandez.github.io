import React, { useState } from "react";

const Container = (props) => {
  const [open, setIsOpen] = useState(false);
  // let className = "hide-children";
  let texto = "Mostrar más";
  // if (open === true) {
  //   className = "show-children ";
  //   texto = "Mostrar menos";
  // }

  let childrenCount = React.Children.count(props.children);
  // let children = [];
  // let childrenToHide = [];
  let childrenToHide = props.children.slice(5);
  let childrenToShow = props.children.slice(0, 5);

  // let childrenArray = [];

  if (childrenCount > 5) {
    // childrenArray.push(props.children);
    // //can refactor with splice method
    // for (let i = 0; i < childrenCount; i++) {
    //   if (i < 5) {
    //     children.push(childrenArray[0][i]);
    //   } else {
    //     childrenToHide.push(childrenArray[0][i]);
    //   }
    // }

    return (
      <div className="container centerContainer" id={props.id}>
        <h1 className="container__title text-white text-3xl font-bold">{props.title}</h1>
        {/* {children} */}
        {childrenToShow}

        {/* <div className="hidden">{childrenToHide}</div> */}
        <div className={open ? "block" : "hidden"}>{childrenToHide}</div>
        <div className="container__show-more text-center">
          <button
            className="container__button text-white"
            onClick={() => setIsOpen(!open)}
          >
            {texto + ` (${childrenCount - 5})`}
          </button>
        </div>
      </div>
    );
  } else {
    // return (
    //   <div className="container centerContainer" id={props.id}>
    //     <h1 className="container__title text-white text-3xl font-bold">
    //       {props.title}
    //     </h1>
    //     {props.children}
    //   </div>
    // );
    return HasLessThatFiveChildren(props)
  }

  function HasLessThatFiveChildren(props) {
    return (
      <div className="container centerContainer" id={props.id}>
        <h1 className="text-white text-3xl font-bold">
          {props.title}
        </h1>
        {props.children}
      </div>
    );
  }
};

export default Container;

// TODO
//   1 refactorizar con el hook como se imprimi los elementos LISTO
//   2 refactorizar con splice como se dividen los elementos LISTO