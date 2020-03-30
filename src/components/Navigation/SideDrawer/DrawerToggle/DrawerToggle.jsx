import React from "react";
import PropTypes from "prop-types";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

DrawerToggle.propTypes = {};

export default DrawerToggle;
