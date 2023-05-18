import React, { useState } from "react";
import classes from "./AvailableRestaurants.module.css";
import AvailableRestaurantsData from "../../TemporaryData/AvailableRestaurantsData.json";
import AvailableRestaurantsHeader from "./AvailableRestaurantsHeader/AvailableRestaurantsHeader";
import AvailableRestaurantsContainer from "./AvailableRestaurantsContainer/AvailableRestaurantsContainer";

const AvailableRestaurants = () => {
  const [datas, setDatas] = useState(AvailableRestaurantsData);
  return (
    <div className={classes.container}>
      <AvailableRestaurantsHeader />
      <AvailableRestaurantsContainer datas={datas} />
    </div>
  );
};

export default AvailableRestaurants;
