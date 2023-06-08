import React, { useContext } from "react";
import classes from "./PaymentProcess.module.css";
import CartContext from "../../store/cart/Cart-context";
import useUserOrder from "../../hook/useUserOrder";

const PaymentProcess = () => {
  const cartContextCtx = useContext(CartContext);
  const { userOrderData } = useUserOrder();
  const cartItems = cartContextCtx.addItems;
  const totalAmount = cartContextCtx.totalAmount.toFixed(2);
  const deliveryCost = cartContextCtx.deliveryCost.toFixed(2);
  const GST = cartContextCtx.GST.toFixed(2);
  const address = cartContextCtx.deliverHere;
  const orderNow = async () => {
    const response = await userOrderData(
      cartItems,
      totalAmount,
      deliveryCost,
      GST,
      address
    );
  };
  return (
    <div className={classes.box}>
      <h1>Payment</h1>
      <div className={classes.location}>
        <img src="/logo.jpg" alt="" />
      </div>
      {address && <h1>Address :- {address}</h1>}
      <div className={classes.buttons}>
        {address && cartItems.length > 0 && (
          <div className={classes.button} onClick={orderNow}>
            ORDER NOW
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentProcess;
