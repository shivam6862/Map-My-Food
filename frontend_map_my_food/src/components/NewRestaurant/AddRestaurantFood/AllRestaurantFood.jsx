import React from "react";
import AddRestaurantFood from "./AddRestaurantFood";
import classes from "../AllRestaurant.module.css";

const AllRestaurantFood = () => {
  return (
    <div className={classes.container}>
      <AddRestaurantFood />
      <div className={classes.buttons}>
        <div className={classes.button}>Add New Food Item</div>
      </div>
    </div>
  );
};

export default AllRestaurantFood;
