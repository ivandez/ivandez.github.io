import React, { useState } from "react";
import { bounceInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link } from "react-scroll";

const styles = {
  bounce: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounceInLeft, "bounceInLeft"),
  },
};

/**
 * TODO
 *  1 add bounce out in right when hidden children
 */

/**
 *
 * Container.js is responsible for rendering a view
 * if it contains less than five elements and another if it contains more than five elements.
 *
 * This component was created to behave like a drop-down menu
 * when there are several elements in the graphical interface to show
 *
 * When this component has more than 5 children
 * it will show 5 elements and the others will apply a display none
 * to show the elements of the number 6 forwards
 * the user has to press the button inside <HasMoreThanFiveChildren /> to be able to visualize them
 */

const Container = (props) => {
  const [open, setIsOpen] = useState(false);

  let childrenCount = React.Children.count(props.children);

  if (childrenCount > 5) {
    return (
      <HasMoreThanFiveChildren
        containerChildren={props.children}
        idForScroll={props.idForScroll}
        title={props.title}
      />
    );
  } else {
    return (
      <HasLessThanFiveChildren
        idForScroll={props.idForScroll}
        id={props.id}
        title={props.title}
        containerChildren={props.children}
      />
    );
  }

  function HasLessThanFiveChildren(props) {
    return (
      <div className="container centerContainer" id={props.id}>
        <h1 className="text-white text-3xl font-bold">{props.title}</h1>
        {props.containerChildren}
      </div>
    );
  }

  function HasMoreThanFiveChildren(props) {
    let childrenToHide = props.containerChildren.slice(5);
    let childrenToShow = props.containerChildren.slice(0, 5);
    let texto = "Show more";
    if (open === true) {
      texto = "Show less";
    }
    return (
      <div className="container centerContainer" id={props.id}>
        <h1 className="container__title text-white text-3xl font-bold">
          {props.title}
        </h1>
        {childrenToShow}
        <StyleRoot>
          <div className={open ? "block" : "hidden"} style={styles.bounce}>
            {childrenToHide}
          </div>
        </StyleRoot>
        <div className="container__show-more text-center">
          <Link
            className="text-white text-2xl my-1 cursor-pointer"
            onClick={() => {
              setIsOpen(!open);
            }}
            id={props.idForScroll}
            to={props.idForScroll}
            smooth={true}
          >
            {`${texto} (${childrenToHide.length})`}
          </Link>
        </div>
      </div>
    );
  }
};

export default Container;
