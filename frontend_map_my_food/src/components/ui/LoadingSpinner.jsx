import classes from "./LoadingSpinner.module.css";
import React from "react";
const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerbody}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
