import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Order from "./../../components/Order/Order";
import axiosInstance from "./../../axios-orders";

const Orders = (props) => {
  const [state, setState] = useState({ orders: [], loading: true });

  useEffect(() => {
    axiosInstance
      .get("/orders.json")
      .then((res) => {
        console.log("Orders", res.data);
        const fetchedOrders = [];
        for (let item in res.data) {
          fetchedOrders.push({ ...res.data[item], id: item });
        }

        setState({ ...state, loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        setState({ ...state, loading: false });
      });
  }, []);

  useEffect(() => {
    console.log("Orders update", state);
    // return () => {};
  }, [state.loading]);

  return (
    <div>
      {/* <Order />
      <Order /> */}
      {state.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        );
      })}
    </div>
  );
};

Orders.propTypes = {};

export default Orders;
