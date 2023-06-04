import React from "react";
import classes from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={classes.container}>
      <img src="/swiggey/User/empty-orders.png" alt="" />
      <h1>No Orders</h1>
      <p>You haven't placed any order yet.</p>
    </div>
  );
};

export default Orders;
