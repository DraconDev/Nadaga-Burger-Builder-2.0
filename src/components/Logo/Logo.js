import React from "react";
import PropTypes from "prop-types";
import burgerLogo from "../../Assets/Images/burger-logo.png";
import "./Logo.module.css";
import classes from "./Logo.module.css";
const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
