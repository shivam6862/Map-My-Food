import React from "react";
import { Link } from "react-router-dom";
import classes from "./EmptyCartHome.module.css";

const EmptyCartHome = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src="/swiggey/Cart/EmptyCartHome.webp" alt="Unserviceable" />
        </div>
        <div className={classes.heading}>
          <h1>Your cart is empty</h1>
        </div>
        <div className={classes.paragraph}>
          <p>You can go to home page to view more restaurants</p>
        </div>
        <Link to={"/"} className={classes.button}>
          <button>SEE RESTAURANTS NEAR YOU</button>
        </Link>
      </div>
    </div>
  );
};
export default EmptyCartHome;
