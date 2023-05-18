import React, { useState } from "react";
import classes from "./AvailableRestaurantsHeader.module.css";

const AvailableRestaurantsHeader = () => {
  const [numberOfRestaurants, setNumberOfRestaurants] = useState(40);
  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        {numberOfRestaurants} restaurants
      </div>
      <div className={classes.header_right}>
        <div className={classes.header_right_text}>Relevance</div>
        <div className={classes.header_right_text}>Delivery Time</div>
        <div className={classes.header_right_text}>Rating</div>
        <div className={classes.header_right_text}>Cost: Low To High</div>
        <div className={classes.header_right_text}>Cost: High To Low</div>
        <div className={classes.header_right_text}>Filters</div>
      </div>
    </div>
  );
};

export default AvailableRestaurantsHeader;
