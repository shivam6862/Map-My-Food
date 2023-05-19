import React from "react";
import classes from "./Cart.module.css";
import CartEmpty from "./CartEmpty/CartEmpty";
import EmptyCartHome from "./EmptyCartHome/EmptyCartHome";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import Process from "./Process/Process";
import Retry from "./Retry/Retry";
import HomeFooter from "../home/HomeFooter/HomeFooter";

const Cart = () => {
  return (
    <div className={classes.container}>
      <EmptyCartHome />
      <div className={classes.middle}>
        <div className={classes.left}>
          <Retry />
          <Process />
        </div>
        <div className={classes.right}>
          <CartEmpty />
          <PlaceOrder />
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};
export default Cart;
