import React from "react";
import PropTypes from "prop-types";
import Burger from "../../Burger/Burger.jsx";
import Button from "../../UI/Button/Button.jsx";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you like it</h1>
      <div className="" style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

CheckoutSummary.propTypes = {};

export default CheckoutSummary;
