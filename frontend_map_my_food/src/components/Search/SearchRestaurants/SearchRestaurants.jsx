import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./SearchRestaurants.module.css";
import SearchRestaurantHeading from "./SearchRestaurantHeading/SearchRestaurantHeading";
import SearchRestaurantFood from "./SearchRestaurantFood/SearchRestaurantFood";
import CheckBox from "../../ui/CheckBox";
import CartNotification from "../../CartNotification/CartNotification";
import useRestaurantFood from "../../hook/useRestaurantFood";
import LoadingSpinner from "../../ui/LoadingSpinner";

const SearchRestaurants = () => {
  const { RestaurantId } = useParams();
  const { RestaurantFoodData } = useRestaurantFood();
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
