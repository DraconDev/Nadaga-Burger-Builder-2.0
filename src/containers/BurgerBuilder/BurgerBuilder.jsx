import React, { useState, useEffect } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

function BurgerBuilder() {
  const [state, setState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  });

  const updatePurchaseState = (props) => {
    const ingredients = { ...props.ingredients };
    const sum = Object.values(ingredients).filter((el) => el > 0).length;
    // console.log("updatePurchaseState", props, state, sum, ingredients);
    setState({ ...props, purchasable: sum ? true : false });
  };

  // useEffect(() => {
  //   const ingredients = { ...state.ingredients };
  //   const sum = Object.values(ingredients).filter((el) => el > 0).length;
  //   setState({ ...state, purchasable: sum ? true : false });
  // }, [state.ingredients]);

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

  const purchaseContinueHandler = (params) => {
    alert("Continue");
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
  return (
    <Auxiliary>
      <Modal show={state.purchasing} modalClosed={purchaseHandler}>
        <OrderSummary
          ingredients={state.ingredients}
          purchaseCancelled={purchaseHandler}
          purchaseContinueHandler={purchaseContinueHandler}
          price={state.totalPrice}
        />
      </Modal>
      <Burger {...state} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        purchasable={state.purchasable}
        price={state.totalPrice}
        ordered={purchaseHandler}
      />
    </Auxiliary>
  );
}

export default BurgerBuilder;
