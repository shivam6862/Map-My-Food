import React from "react";
import classes from "./Steps.module.css";
import SvgRestaurant from "../../ui/User/SvgRestaurant";
import Svgoffers from "../../ui/Svg/Svgoffers";

const Steps = () => {
  return (
    <div className={classes.container}>
      <div className={classes.boxes}>
        <div className={classes.left_border}></div>
        <div className={classes.box}>
          <h1>Create New Restaurant</h1>
          <div className={classes.location}>
            <img src="/swiggey/Logo/logo_2022.png" alt="" />
          </div>
        </div>
        <div className={classes.box}>
          <h1>Add Restaurant Food</h1>
          <div className={classes.location}>
            <SvgRestaurant />
          </div>
        </div>
        <div className={classes.box}>
          <h1>Add Restaurant Offer</h1>
          <div className={classes.location}>
            <Svgoffers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
