import React from "react";
import classes from "./Super.module.css";

const Super = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>Map my food</h1>
        <p>Get free delivery and extra discounts all across Map my food.</p>
        <p>
          Your Swiggy One benefits can be availed only on the Map my food App.
        </p>
        <div className={classes.images}>
          <div className={classes.image}>
            <img src="/swiggey/Logo/appStore.png" alt="" />
          </div>
          <div className={classes.image}>
            <img src="/swiggey/Logo/googlePlay.png" alt="" />
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <img src="/swiggey/User/my_account_supe.webp" alt="" />
      </div>
    </div>
  );
};

export default Super;
