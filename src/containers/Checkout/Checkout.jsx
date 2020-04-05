import React from "react";
import PropTypes from "prop-types";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary.jsx";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

const Checkout = (props) => {
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState([]);

  const checkoutCancelled = (params) => {
    props.history.goBack();
  };
  const checkoutContinued = (params) => {
    props.history.replace("checkout/contact-data");
  };
  useEffect(() => {
    // console.log("Checkout", props);
    const query = props.location.search;
    const queryArray = query.slice(1).split(/[=&]/);
    let ingredients = [];
    // console.log("queryArray", queryArray);
    for (let index = 0; index < queryArray.length; ) {
      if (queryArray[index] === "price") {
        setPrice(queryArray.splice(0, 2)[1]);
      } else {
        ingredients.push(queryArray.splice(0, 2));
      }
    }
    // setPrice(ingredients.splice(ingredients.indexOf("price"), 1));
    console.log("Checkout", ingredients, price);
    setIngredients(Object.fromEntries(ingredients));

    // console.log("Checkout, ingredients", ingredients);
    // for (let item of query.entries()) {
    //   console.log(item);
    //   // ingredients[item[0]] = +item[1];
    // }

    return () => {};
  }, []);

  useEffect(() => {
    console.log("ingredients", ingredients, price);
    return () => {};
  }, [ingredients, price]);

  return (
    <div>
      <CheckoutSummary
        ingredients={{}}
        checkoutCancelled={checkoutCancelled}
        checkoutContinued={checkoutContinued}
      />
      <Route
        path={props.match.path + "/contact-data"}
        // component={ContactData}

        //Used to pass in ingredients
        render={(props) => (
          <ContactData ingredients={ingredients} price={price} {...props} />
        )}
      />
    </div>
  );
};

Checkout.propTypes = {};

export default Checkout;
