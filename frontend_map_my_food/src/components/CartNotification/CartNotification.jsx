import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./CartNotification.module.css";
import CartContext from "../store/cart/Cart-context";

const CartNotification = () => {
  const cartContextCtx = useContext(CartContext);
  return (
    <div className={classes.container}>
      {cartContextCtx.addItems.length > 0 ? (
        <div className={classes.box}>
          <div className={classes.left}>
            <div className={classes.left_1_a}>
              {cartContextCtx.addItems.length} Items
            </div>
            <div className={classes.left_1_b}>{cartContextCtx.totalAmount}</div>
          </div>
          <Link to={"/checkout"} className={classes.right}>
            VIEW CART
            <img src="/swiggey/Cart/logo.webp" alt="" />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartNotification;
