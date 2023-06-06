import React from "react";
import AddRestaurantOffer from "./AddRestaurantOffer";
import classes from "../AllRestaurant.module.css";

const AllRestaurantOffer = () => {
  return (
    <div className={classes.container}>
      <AddRestaurantOffer />
      <div className={classes.buttons}>
        <div className={classes.button}>Add New Offer</div>
      </div>
    </div>
  );
};

export default AllRestaurantOffer;
