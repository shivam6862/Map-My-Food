import React from "react";
import classes from "./Retry.module.css";

const Retry = () => {
  return (
    <div className={classes.container}>
      <div className={classes.side_image}>
        <img src="/swiggey/Cart/1.webp" alt="" />
      </div>
      <div className={classes.box}>
        <h1>
          Oops, something went wrong. Please clear your cart and try again.
        </h1>
        <button>RETRY</button>
      </div>
    </div>
  );
};
export default Retry;
