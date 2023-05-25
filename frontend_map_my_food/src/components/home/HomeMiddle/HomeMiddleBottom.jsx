import React from "react";
import classes from "./HomeMiddleBottom.module.css";

const HomeMiddleBottom = () => {
  return (
    <div className={classes.box}>
      <div className={classes.left}>
        <div className={classes.part1}>
          <h1>Restaurants in your pocket</h1>
          <p>
            Order from your favorite restaurants & track on the go, with the
            all-new Map my food app.
          </p>
        </div>
        <div className={classes.part2}>
          <img src="/swiggey/Logo/googlePlay.png" alt="googlePlay" />
          <img src="/swiggey/Logo/appStore.png" alt="appStore" />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightfirst}>
          <img src="/swiggey/PhoneView/lower.png" alt="lower" />
        </div>
        <div className={classes.rightsecond}>
          <img src="/swiggey/PhoneView/upper.webp" alt="upper" />
        </div>
      </div>
    </div>
  );
};

export default HomeMiddleBottom;
