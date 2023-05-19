import classes from "./Loading.module.css";
import React from "react";
const Loading = () => {
  return (
    <div className={classes.spinnerbody}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loading;
