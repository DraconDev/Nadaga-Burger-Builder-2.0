import React from "react";
import PropTypes from "prop-types";
import "./Toolbar.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div className="">Menu</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
