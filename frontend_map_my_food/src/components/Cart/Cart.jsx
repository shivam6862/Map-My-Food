import React, { useContext } from "react";
import classes from "./Cart.module.css";
import EmptyCartHome from "./EmptyCartHome/EmptyCartHome";
import Retry from "./Retry/Retry";
import Process from "./Process/Process";
import CartEmpty from "./CartEmpty/CartEmpty";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import CartContext from "../store/cart/Cart-context";

const Cart = () => {
  const cartContextCtx = useContext(CartContext);
  const OrderPlacedLength = cartContextCtx.addItems.length !== 0;
  return (
    <div className={classes.container}>
      {!OrderPlacedLength && <EmptyCartHome />}
      <div className={classes.middle}>
        <div className={classes.left}>
          {!OrderPlacedLength && <Retry />}
          <Process />
        </div>
        <div className={classes.right}>
          {!OrderPlacedLength && <CartEmpty />}
          {OrderPlacedLength && <PlaceOrder />}
        </div>
      </div>
    </div>
  );
};
export default Cart;
