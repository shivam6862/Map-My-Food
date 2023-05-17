import React from "react";
import Header from "../header/Header";
import AnimationBox from "./AnimationBox/AnimationBox";
import AvailableRestaurants from "./AvailableRestaurants/AvailableRestaurants";
import Loading from "./Loading/Loading";
import Recipes from "./Recipes/Recipes";
import classes from "./Restaurants.module.css";
import HomeFooter from "../home/HomeFooter/HomeFooter";
import Unserviceable from "./Unserviceable/Unserviceable";

const Restaurants = () => {
  return (
    <div className={classes.box}>
      <Header />
      <Loading />
      <Unserviceable />
      <AnimationBox />
      <Recipes />
      <AvailableRestaurants />
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Restaurants;
