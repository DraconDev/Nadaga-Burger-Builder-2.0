import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  console.log("Button", props);
  return (
    <button className={`Button ${props.btnType}`} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

// Button.propTypes = {};

export default Button;
