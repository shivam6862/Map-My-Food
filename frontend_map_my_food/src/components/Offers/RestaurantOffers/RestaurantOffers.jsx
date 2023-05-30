import React, { useState, useEffect } from "react";
import classes from "./RestaurantOffers.module.css";
import OfferHeader from "../OfferHeader/OfferHeader";
import AvailableRestaurantsContainer from "../../restaurants/AvailableRestaurants/AvailableRestaurantsContainer/AvailableRestaurantsContainer";
import useAvailableRestaurants from "../../hook/useAvailableRestaurants";
import LoadingSpinner from "../../ui/LoadingSpinner";

const RestaurantOffers = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { AvailableRestaurantsData } = useAvailableRestaurants();
  useEffect(() => {
    const availableRestaurants = async () => {
      const responseAvailableRestaurantsData = await AvailableRestaurantsData();
      setDatas(responseAvailableRestaurantsData);
      setIsLoading(false);
    };
    availableRestaurants();
  }, []);
  return (
    <div className={classes.container}>
      <OfferHeader />
      <div className={classes.lower_container}>
        <div className={classes.box}>
          <h1>All offers ({datas.length})</h1>
          <p>All offers and deals, from restaurants near you</p>
        </div>
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && <AvailableRestaurantsContainer datas={datas} />}
      </div>
    </div>
  );
};

export default RestaurantOffers;
