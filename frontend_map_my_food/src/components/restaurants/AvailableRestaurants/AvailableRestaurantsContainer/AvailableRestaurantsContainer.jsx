import React from "react";
import classes from "./AvailableRestaurantsContainer.module.css";

const AvailableRestaurantsContainer = ({ datas }) => {
  return (
    <div className={classes.bottom_container}>
      {datas.map((data, index) => (
        <div key={index} className={classes.bottom_box}>
          <div className={classes.bottom_box_image}>
            {+data.id % 4 == 1 ? (
              <div className={classes.bottom_box_tag}>PROMOTED</div>
            ) : (
              <></>
            )}
            <img
              src={`${import.meta.env.VITE_REACT_BACKEND_URL}${data.image}`}
              alt=""
              onError={(event) => {
                event.target.onerror = null;
                event.target.src = data.image;
              }}
            />
          </div>
          <div className={classes.bottom_box_about}>
            <div className={classes.bottom_box_about_heading}>
              {data.about.heading}
            </div>
            <div className={classes.bottom_box_about_para}>
              {data.about.name}
            </div>
          </div>
          <div className={classes.bottom_box_last}>
            <div className={classes.bottom_box_last_star}>{data.last.star}</div>
            <div className={classes.bottom_box_last_time}>{data.last.time}</div>
            <div className={classes.bottom_box_last_cost}>{data.last.cost}</div>
          </div>
          <div className={classes.quick_view}>QUICK VIEW</div>
        </div>
      ))}
    </div>
  );
};
export default AvailableRestaurantsContainer;
