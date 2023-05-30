import React from "react";
import classes from "./SearchRestaurantHeading.module.css";
import Svgsearch from "../../../ui/Svg/Svgsearch";
import SvgDuration from "../../../ui/Svg/SvgDuration";
import SvgPrice from "../../../ui/Svg/SvgPrice";

const SearchRestaurantHeading = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.part1}>
        <div className={classes.address}>{data.address}</div>
        <div className={classes.search_logo}>
          <Svgsearch />
        </div>
      </div>
      <div className={classes.part2}>
        <div className={classes.part2_left}>
          <div className={classes.part2_left_top}>
            <h1>{data.Restaurant}</h1>
            <h4>{data.Restaurants_dish}</h4>
            <p>
              {data.location} , {data.distance}
            </p>
          </div>
          <div className={classes.part2_left_bottom}>
            <img src="/swiggey/Search/Delivery_fee.png" alt="" />
            {data.FreeDeliveryonOrderDistance}
            {data.FreeDeliveryonOrderAbove}
          </div>
        </div>
        <div className={classes.part2_right}>
          <div className={classes.part2_right_top}>
            <img src="/swiggey/Search/logo/star.png" alt="" />
            <span>{data.rating}</span>
          </div>
          <div className={classes.part2_right_bottom}>
            {data.ratingCount} ratings
          </div>
        </div>
      </div>
      <div className={classes.part3}>
        <div className={classes.part3_1}>
          <SvgDuration />
          {"   "}
          {data.time}
        </div>
        <div className={classes.part3_2}>
          <SvgPrice />
          {"   "}
          {data.price}
        </div>
      </div>
      <div className={classes.part4}>
        {data.offers.map((offer, index) => (
          <div key={index} className={classes.part4_offer}>
            <div className={classes.part4_offer_top}>
              <img src={offer.image} alt="logo" />
              {offer.percentage}
            </div>
            <div className={classes.part4_offer_bottom}>{offer.above}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRestaurantHeading;
