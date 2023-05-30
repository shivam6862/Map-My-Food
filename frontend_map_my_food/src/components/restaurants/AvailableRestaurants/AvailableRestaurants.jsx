import React, { useState } from "react";
import classes from "./AvailableRestaurants.module.css";
import AvailableRestaurantsHeader from "./AvailableRestaurantsHeader/AvailableRestaurantsHeader";
import AvailableRestaurantsContainer from "./AvailableRestaurantsContainer/AvailableRestaurantsContainer";

const AvailableRestaurants = ({ data }) => {
  return (
    <div className={classes.container}>
      <AvailableRestaurantsHeader />
      <AvailableRestaurantsContainer datas={data} />
    </div>
  );
};

export default AvailableRestaurants;
