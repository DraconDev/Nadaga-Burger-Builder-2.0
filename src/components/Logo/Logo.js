import React from "react";
import PropTypes from "prop-types";
import burgerLogo from "../../Assets/Images/burger-logo.png";
import "./Logo.scss";
const Logo = (props) => {
  return (
    <div className="Logo">
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
