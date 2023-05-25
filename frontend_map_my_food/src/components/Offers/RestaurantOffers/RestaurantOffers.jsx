import React, { useState } from "react";
import classes from "./RestaurantOffers.module.css";
import OfferHeader from "../OfferHeader/OfferHeader";
import AvailableRestaurantsContainer from "../../restaurants/AvailableRestaurants/AvailableRestaurantsContainer/AvailableRestaurantsContainer";
import AvailableRestaurantsData from "../../TemporaryData/AvailableRestaurantsData.json";

const RestaurantOffers = () => {
  const [datas, setDatas] = useState(AvailableRestaurantsData);
  return (
    <div className={classes.container}>
      <OfferHeader />
      <div className={classes.lower_container}>
        <div className={classes.box}>
          <h1>All offers ({datas.length})</h1>
          <p>All offers and deals, from restaurants near you</p>
        </div>
        <AvailableRestaurantsContainer datas={datas} />
      </div>
    </div>
  );
};

export default RestaurantOffers;
