import React, { useEffect, useState } from "react";
import classes from "./Orders.module.css";
import usegetUserOrder from "../../hook/usegetUserOrder";

const Orders = () => {
  const { userOrderData } = usegetUserOrder();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const order = async () => {
      const response = await userOrderData();
      if (response.length > 0) setOrder(response[0].order);
    };
    order();
  }, []);

  return (
    <div className={classes.container}>
      {order == null ? (
        <>
          <img src="/swiggey/User/empty-orders.png" alt="" />
          <h1>No Orders</h1>
          <p>You haven't placed any order yet.</p>
        </>
      ) : (
        <div className={classes.orders}>
          <div className={classes.order}>
            <p>Address:- {order.address}</p>
            <h1>
              Amount :- {+order.GST + +order.totalAmount + +order.deliveryCost}
            </h1>
            <h2>Number of items:- {order.order.length}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
