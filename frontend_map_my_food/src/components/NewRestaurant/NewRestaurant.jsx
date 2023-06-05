import React from "react";
import classes from "./NewRestaurant.module.css";
import Steps from "./Steps/Steps";
import CreateNewRestaurant from "./CreateNewRestaurant/CreateNewRestaurant";
import AddRestaurantFood from "./AddRestaurantFood/AddRestaurantFood";
import AddRestaurantOffer from "./AddRestaurantOffer/AddRestaurantOffer";

const NewRestaurant = () => {
  return (
    <div className={classes.container}>
      <Steps />
      <CreateNewRestaurant />
      <AddRestaurantFood />
      <AddRestaurantOffer />
    </div>
  );
};

export default NewRestaurant;
