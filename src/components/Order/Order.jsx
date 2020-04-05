import React from "react";
import PropTypes from "prop-types";
import classes from "./Order.module.css";

const Order = (props) => {
  console.log("Order", props);
  const ingredients = [];
  for (let item in props.ingredients) {
    ingredients.push({ name: item, amount: props.ingredients[item] });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "2px solid black",
          padding: "5px",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      {ingredientOutput}
      <p>Price : {props.price.toFixed(2)}</p>
    </div>
  );
};

Order.propTypes = {};

export default Order;
