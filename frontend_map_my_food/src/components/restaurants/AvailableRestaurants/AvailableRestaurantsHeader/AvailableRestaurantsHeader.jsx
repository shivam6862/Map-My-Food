import React, { useState } from "react";
import classes from "./AvailableRestaurantsHeader.module.css";
import useAvailableRestaurantsSorting from "../../../hook/useAvailableRestaurantsSorting";

const AvailableRestaurantsHeader = ({ numberOfRestaurants, setData }) => {
  const [index, setIndex] = useState(-1);
  const { AvailableRestaurantsSortingData } = useAvailableRestaurantsSorting();
  const Sorting = async (sorting, newIndex) => {
    const response = await AvailableRestaurantsSortingData(sorting);
    setData(response);
    setIndex(newIndex);
  };
  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        {numberOfRestaurants} restaurants
      </div>
      <div className={classes.header_right}>
        <div
          className={
            index === 0
              ? classes.header_right_text_active
              : classes.header_right_text
          }
          onClick={() => {
            Sorting("relevance", 0);
          }}
        >
          Relevance
        </div>
        <div
          className={
            index === 1
              ? classes.header_right_text_active
              : classes.header_right_text
          }
          onClick={() => {
            Sorting("time", 1);
          }}
        >
          Delivery Time
        </div>
        <div
          className={
            index === 2
              ? classes.header_right_text_active
              : classes.header_right_text
          }
          onClick={() => {
            Sorting("rating", 2);
          }}
        >
          Rating
        </div>
        <div
          className={
            index === 3
              ? classes.header_right_text_active
              : classes.header_right_text
          }
          onClick={() => {
            Sorting("low", 3);
          }}
        >
          Cost: Low To High
        </div>
        <div
          className={
            index === 4
              ? classes.header_right_text_active
              : classes.header_right_text
          }
          onClick={() => {
            Sorting("high", 4);
          }}
        >
          Cost: High To Low
        </div>
        <div className={classes.header_right_text}>Filters</div>
      </div>
    </div>
  );
};

export default AvailableRestaurantsHeader;
