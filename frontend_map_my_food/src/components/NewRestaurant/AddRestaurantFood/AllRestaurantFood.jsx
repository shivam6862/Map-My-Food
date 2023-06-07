import React, { useEffect, useState } from "react";
import AddRestaurantFood from "./AddRestaurantFood";
import classes from "../AllRestaurant.module.css";
import SvgAddNew from "../../ui/User/SvgAddNew";
import useGetFoodsAndOffers from "../../hook/useGetFoodsAndOffers";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";
import { useNotification } from "../../hook/useNotification";

const AllRestaurantFood = () => {
  const { GetFoodsAndOffersData } = useGetFoodsAndOffers();
  const { fetchRestaurantId } = useLocationLocalStorage();
  const { NotificationHandler } = useNotification();
  const isRestaurantId = fetchRestaurantId();
  const [allFoodData, setAllFoodData] = useState([]);
  const [isAddNew, setIsAddnew] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await GetFoodsAndOffersData("restaurantallfood");
      setAllFoodData(response);
    };
    if (isRestaurantId != undefined) fetchdata();
  }, []);
  const toggleForm = () => {
    if (isRestaurantId != undefined) {
      setIsAddnew((prev) => !prev);
    } else {
      setIsAddnew(false);
      NotificationHandler("First make a Restaurant!", "Warn");
    }
  };
  return (
    <div className={classes.container}>
      {allFoodData.map((food, index) => (
        <AddRestaurantFood key={index} food={food} />
      ))}
      {isAddNew && <AddRestaurantFood />}
      <div className={classes.buttons}>
        <div className={classes.button}>
          <div onClick={toggleForm}>
            <SvgAddNew />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRestaurantFood;
