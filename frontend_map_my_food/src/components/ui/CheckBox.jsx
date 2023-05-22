import React from "react";
import { useState } from "react";
import classes from "./CheckBox.module.css";

const CheckBox = ({ setisChecked, isChecked }) => {
  const handleCheckboxChange = () => {
    if (isChecked) setisChecked(false);
    else setisChecked(true);
  };
  return (
    <div className={classes.container}>
      Veg Only
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
      <div className={classes.box}>
        <div
          className={`${isChecked ? classes.veg_left : classes.nonveg_left}`}
        ></div>
        <div
          className={`${isChecked ? classes.veg_right : classes.nonveg_right}`}
        ></div>
      </div>
    </div>
  );
};

export default CheckBox;
