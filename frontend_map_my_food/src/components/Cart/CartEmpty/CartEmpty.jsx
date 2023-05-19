import React from "react";
import classes from "./CartEmpty.module.css";

const CartEmpty = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>Cart Empty</h1>
        </div>
        <div className={classes.image}>
          <img src="/swiggey/Cart/CartEmpty.webp" alt="Unserviceable" />
        </div>
        <div className={classes.paragraph}>
          <p>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartEmpty;
