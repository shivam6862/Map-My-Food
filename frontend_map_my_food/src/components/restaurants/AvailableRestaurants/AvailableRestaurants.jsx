import React, { useState } from "react";
import classes from "./AvailableRestaurants.module.css";
import AvailableRestaurantsData from "./AvailableRestaurantsData.json";

const AvailableRestaurants = () => {
  const [datas, setDatas] = useState(AvailableRestaurantsData);
  const [numberOfRestaurants, setNumberOfRestaurants] = useState(40);
  return (
    <div className={classes.container}>
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
      <div className={classes.bottom_container}>
        {datas.map((data, index) => (
          <div key={index} className={classes.bottom_box}>
            <div className={classes.bottom_box_image}>
              {+data.id % 4 == 1 ? (
                <div className={classes.bottom_box_tag}>PROMOTED</div>
              ) : (
                <></>
              )}
              <img src={data.image} alt="" />
            </div>
            <div className={classes.bottom_box_about}>
              <div className={classes.bottom_box_about_heading}>
                {data.about.heading}
              </div>
              <div className={classes.bottom_box_about_para}>
                {data.about.para}
              </div>
            </div>
            <div className={classes.bottom_box_last}>
              <div className={classes.bottom_box_last_star}>
                {data.last.star}
              </div>
              <div className={classes.bottom_box_last_time}>
                {data.last.time}
              </div>
              <div className={classes.bottom_box_last_cost}>
                {data.last.cost}
              </div>
            </div>
            <div className={classes.quick_view}>QUICK VIEW</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableRestaurants;
