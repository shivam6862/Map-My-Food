import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./SearchRestaurants.module.css";
import SearchRestaurantHeading from "./SearchRestaurantHeading/SearchRestaurantHeading";
import SearchRestaurantFood from "./SearchRestaurantFood/SearchRestaurantFood";
import CheckBox from "../../ui/CheckBox";
import CartNotification from "../../CartNotification/CartNotification";
import useRestaurantFood from "../../hook/useRestaurantFood";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";

const SearchRestaurants = () => {
  const { RestaurantId } = useParams();
  const { RestaurantFoodData } = useRestaurantFood();
  const { fetchPincode } = useLocationLocalStorage();
  const pincode = fetchPincode();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isChecked, setisChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const RestaurantFoodDataFunction = async () => {
      const response = await RestaurantFoodData(RestaurantId);
      setData(response);
      setIsLoading(false);
    };
    RestaurantFoodDataFunction();
  }, []);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    navigate("/");
  }, [pincode]);
  return (
    <div className={classes.container}>
      {isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <div className={classes.box}>
          <SearchRestaurantHeading data={data} />
          <div className={classes.part2}>
            <CheckBox setisChecked={setisChecked} isChecked={isChecked} />
          </div>
          {isChecked && (
            <SearchRestaurantFood items={data.veg} veg={true} data={data} />
          )}
          {!isChecked && (
            <SearchRestaurantFood items={data.nonveg} veg={false} data={data} />
          )}
        </div>
      )}
      <CartNotification />
    </div>
  );
};

export default SearchRestaurants;
