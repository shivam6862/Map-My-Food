import React, { useEffect, useState } from "react";
import AnimationBox from "./AnimationBox/AnimationBox";
import AvailableRestaurants from "./AvailableRestaurants/AvailableRestaurants";
import Loading from "./Loading/Loading";
import Recipes from "./Recipes/Recipes";
import classes from "./Restaurants.module.css";
import HomeFooter from "../home/HomeFooter/HomeFooter";
import Unserviceable from "./Unserviceable/Unserviceable";
import RecipesLoading from "./Recipes/RecipesLoading/RecipesLoading";

const Restaurants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFood, setIsLoadingFood] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => {
      setIsLoadingFood(false);
    }, 3500);
  }, []);
  const now = new Date();
  const options = { timeZone: "Asia/Kolkata", hour12: false };
  const hour = parseInt(now.toLocaleTimeString("en-US", options).slice(0, 2));
  const [unserveiceable, setUnServeiceable] = useState(hour > 22 || hour <= 9);
  return (
    <div className={classes.box}>
      {isLoading && <Loading />}
      {unserveiceable && !isLoading && <Unserviceable />}
      {isLoadingFood && <AnimationBox />}
      {isLoadingFood && <RecipesLoading />}
      {!isLoadingFood && <AvailableRestaurants />}
      {!isLoadingFood && <Recipes />}
      <HomeFooter />
    </div>
  );
};

export default Restaurants;
