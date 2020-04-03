import React, { useEffect } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  
  useEffect(() => {
    console.log("OrderSummary", "Update test");
  });

  return (
    <Auxiliary>
      <h3>Your orderSummary</h3>
      <p>Burger with ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total price: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinueHandler}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
