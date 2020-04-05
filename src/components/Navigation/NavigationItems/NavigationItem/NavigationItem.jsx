import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
// import { classes } from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  console.log("NavigationItem", props);
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.link}
        activeClassName={classes.active}
        exact
        // className={`${props.active ? "active" : null}`}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {};

export default NavigationItem;
