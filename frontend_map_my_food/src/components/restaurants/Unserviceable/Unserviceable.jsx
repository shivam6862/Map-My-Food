import React from "react";
import classes from "./Unserviceable.module.css";

const Unserviceable = () => {
  const now = new Date();
  const options = { timeZone: "Asia/Kolkata", hour12: false };
  const hour = parseInt(now.toLocaleTimeString("en-US", options).slice(0, 2));
  return (
    <div className={classes.box}>
      {hour > 22 || hour <= 8 ? (
        <div className={classes.container}>
          <div className={classes.image}>
            <img src="/swiggey/Unserviceable.webp" alt="Unserviceable" />
          </div>
          <div className={classes.heading}>
            <h1>Oh! All restaurants are currently unserviceable</h1>
          </div>
          <div className={classes.paragraph}>
            <p>All restaurants are unserviceable, check back in some time.</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Unserviceable;
