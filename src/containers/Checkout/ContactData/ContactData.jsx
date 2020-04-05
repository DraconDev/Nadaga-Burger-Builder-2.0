import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axiosInstance from "./../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

const ContactData = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: { street: "", postalCode: "" },
    ...props,
  });

  const orderHandler = (event) => {
    console.log("ContactData", props);
    event.preventDefault();

    setState({ ...state, loading: true });
    const order = {
      ingredients: state.ingredients,
      price: state.price,
      customer: {
        name: "Burger",
        address: {
          street: "test",
          country: "test",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axiosInstance
      .post("/orders.json", order)
      .then((res) => {
        props.history.push("/");
        setState({ ...state, loading: false, purchasing: false });
      })
      .catch((error) =>
        setState({ ...state, loading: false, purchasing: false })
      );
  };

  let form = (
    <form action="">
      <input type="text" name="name" placeholder="temp" />
      <input type="email" name="name" placeholder="temp" />
      <input type="text" name="name" placeholder="temp" />
      <input type="text" name="name" placeholder="temp" />
      <Button btnType="Success" clicked={orderHandler}>
        Order
      </Button>
    </form>
  );

  if (state.loading) {
    form = <Spinner />;
  }
  return (
    <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      {form}
    </div>
  );
};

ContactData.propTypes = {};

export default ContactData;
