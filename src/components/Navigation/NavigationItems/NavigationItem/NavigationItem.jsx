import React from "react";
import PropTypes from "prop-types";
import "./NavigationItem.scss";
const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <a href={props.link} className={`${props.active ? "active" : null}`}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {};

export default NavigationItem;
