import React, { useState } from "react";
import OfferHeader from "../OfferHeader/OfferHeader";
import classes from "./RestaurantOffers.module.css";
import AvailableRestaurantsContainer from "../../restaurants/AvailableRestaurants/AvailableRestaurantsContainer/AvailableRestaurantsContainer";
import AvailableRestaurantsData from "../../TemporaryData/AvailableRestaurantsData.json";
import HomeFooter from "../../home/HomeFooter/HomeFooter";

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
      <HomeFooter />
    </div>
  );
};

export default RestaurantOffers;
