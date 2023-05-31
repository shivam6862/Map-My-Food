import React, { useEffect, useState } from "react";
import AnimationBox from "./AnimationBox/AnimationBox";
import AvailableRestaurants from "./AvailableRestaurants/AvailableRestaurants";
import Loading from "./Loading/Loading";
import Recipes from "./Recipes/Recipes";
import classes from "./Restaurants.module.css";
import Unserviceable from "./Unserviceable/Unserviceable";
import RecipesLoading from "./Recipes/RecipesLoading/RecipesLoading";
import useAvailableRestaurants from "../hook/useAvailableRestaurants";
import useRecipes from "../hook/useRecipes";

const Restaurants = () => {
  const { AvailableRestaurantsData } = useAvailableRestaurants();
  const { RecipesData } = useRecipes();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFood, setIsLoadingFood] = useState(true);
  const [dataAvailableRestaurants, setdataAvailableRestaurants] = useState([]);
  const [dataRecipes, setDataRecipes] = useState([]);
  useEffect(() => {
    const availableRestaurants = async () => {
      const responseAvailableRestaurantsData = await AvailableRestaurantsData();
      const responseRecipesData = await RecipesData();
      setdataAvailableRestaurants(responseAvailableRestaurantsData);
      setDataRecipes(responseRecipesData);
      setIsLoadingFood(false);
      setIsLoading(false);
    };
    availableRestaurants();
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
      {!isLoadingFood && (
        <AvailableRestaurants
          data={dataAvailableRestaurants}
          setData={setdataAvailableRestaurants}
        />
      )}
      {!isLoadingFood && <Recipes datas={dataRecipes} />}
    </div>
  );
};

export default Restaurants;
