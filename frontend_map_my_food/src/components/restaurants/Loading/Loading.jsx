import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.box}>
      <div className={classes.spinnerbody}>
        <div className={classes.spinner}></div>
      </div>
      <div className={classes.heading}>Looking for great food near you...</div>
    </div>
  );
};

export default Loading;
