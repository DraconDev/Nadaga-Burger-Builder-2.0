import React from "react";
import PropTypes from "prop-types";
import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" active>
        Checkout
      </NavigationItem>
    </ul>
  );
};

NavigationItems.propTypes = {};

export default NavigationItems;
