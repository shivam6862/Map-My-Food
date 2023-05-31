import React from "react";
import classes from "./AvailableRestaurants.module.css";
import AvailableRestaurantsHeader from "./AvailableRestaurantsHeader/AvailableRestaurantsHeader";
import AvailableRestaurantsContainer from "./AvailableRestaurantsContainer/AvailableRestaurantsContainer";

const AvailableRestaurants = ({ data, setData }) => {
  const numberOfRestaurants = new Set();
  data.forEach((item) => {
    const heading = item.about.heading;
    numberOfRestaurants.add(heading);
  });
  const length = numberOfRestaurants.size;
  return (
    <div className={classes.container}>
      <AvailableRestaurantsHeader
        numberOfRestaurants={length}
        setData={setData}
      />
      <AvailableRestaurantsContainer datas={data} />
    </div>
  );
};

export default AvailableRestaurants;
