import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartEmpty from "./CartEmpty/CartEmpty";
import EmptyCartHome from "./EmptyCartHome/EmptyCartHome";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import Process from "./Process/Process";
import Retry from "./Retry/Retry";
import HomeFooter from "../home/HomeFooter/HomeFooter";
import PlaceOrderData from "../TemporaryData/Cart/PlaceOder.json";
import CartContext from "../store/cart/Cart-context";

const Cart = () => {
  const cartContextCtx = useContext(CartContext);
  // const OrderPlacedLength = Object.keys(PlaceOrderData).length !== 0;
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
      <HomeFooter />
    </div>
  );
};
export default Cart;
