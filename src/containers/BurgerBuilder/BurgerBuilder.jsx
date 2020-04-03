import React, { useState, useEffect } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner.jsx";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler.jsx";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = () => {
  const [state, setState] = useState({
    // ingredients: {
    //   salad: 0,
    //   bacon: 0,
    //   cheese: 0,
    //   meat: 0,
    // },
    ingredients: "",
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    loadedIngredients: false,
  });

  const updatePurchaseState = (props) => {
    const ingredients = { ...props.ingredients };
    const sum = Object.values(ingredients).filter((el) => el > 0).length;
    // console.log("updatePurchaseState", props, state, sum, ingredients);
    setState({ ...props, purchasable: sum ? true : false });
  };

  useEffect(() => {
    //fetching burger ingredients from firebase
    axios
      .get("https://burgerbuilder-7dafe.firebaseio.com/ingredients.json")
      .then((res) => {
        console.log("res.data", res.data);
        setState({ ...state, ingredients: res.data, loadedIngredients: true });
      });
  }, []);

  useEffect(() => {
    console.log("Data ready");
  }, [state.loadedIngredients]);

  const addIngredientHandler = (type) => {
    // console.log("addIngredientHandler", state, type);
    const prevIngredient = state.ingredients[type];
    const prevTotal = state.totalPrice;
    const newState = {
      ...state,
      ingredients: { ...state.ingredients, [type]: prevIngredient + 1 },
      totalPrice: prevTotal + INGREDIENT_PRICES[type],
    };
    setState({ ...newState });
    updatePurchaseState({ ...newState });
  };

  const purchaseHandler = (params) => {
    setState({ ...state, purchasing: !state.purchasing });
    console.log("purchaseHandler", state);
  };

  const purchaseContinueHandler = () => {
    // alert("Continue");
    setState({ ...state, loading: true });
    const order = {
      ingredients: state.ingredients,
      price: state.totalPrice,
      customer: {
        name: "Max",
        address: {
          street: "test",
          country: "test",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => setState({ ...state, loading: false, purchasing: false }))
      .catch((error) =>
        setState({ ...state, loading: false, purchasing: false })
      );
  };

  const removeIngredientHandler = (type) => {
    if (state.ingredients[type] <= 0) {
      return;
    }
    const prevIngredient = state.ingredients[type];
    const prevTotal = state.totalPrice;
    const newState = {
      ...state,
      ingredients: { ...state.ingredients, [type]: prevIngredient - 1 },
      totalPrice: prevTotal - INGREDIENT_PRICES[type],
    };
    setState({ ...newState });
    updatePurchaseState({ ...newState });
  };

  const { salad, bacon, cheese, meat } = state;

  const disabledInfo = {
    ...state.ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = (
    <OrderSummary
      ingredients={state.ingredients}
      purchaseCancelled={purchaseHandler}
      purchaseContinueHandler={purchaseContinueHandler}
      price={state.totalPrice}
    />
  );
  if (state.loading) {
    orderSummary = <Spinner />;
  }

  return (
    <Auxiliary>
      <Modal show={state.purchasing} modalClosed={purchaseHandler}>
        {orderSummary}
      </Modal>
      <Burger {...state} />
      {state.loadedIngredients ? (
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={state.purchasable}
          price={state.totalPrice}
          ordered={purchaseHandler}
        />
      ) : (
        <Spinner />
      )}
    </Auxiliary>
  );
};

export default BurgerBuilder;
