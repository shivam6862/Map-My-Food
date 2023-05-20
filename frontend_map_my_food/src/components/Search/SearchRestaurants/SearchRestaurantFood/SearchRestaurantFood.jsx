import React, { useState } from "react";
import classes from "./SearchRestaurantFood.module.css";
import SvgArrow from "../../SvgArrow/SvgArrow";

const SearchRestaurantFood = ({ items, veg }) => {
  return (
    <div className={classes.container}>
      {items.map((each_item, index_j) => {
        return (
          <div className={classes.item} key={index_j}>
            <div className={classes.item_part1}>
              <h1 className={classes.item_part1_hotal}>{each_item.hotal}</h1>
              <div className={classes.item_part1_star}>
                <img src="/swiggey/Search/logo/rating.jpg" alt="" />
                {each_item.star}
                {"   ...   "}
                {each_item.Dtime}
              </div>
              <div className={classes.svgarrow}>
                <SvgArrow />
              </div>
            </div>
            <div className={classes.item_part2}></div>
            <div className={classes.item_part3}>
              <div className={classes.item_part3_left}>
                <div className={classes.item_part3_name}>
                  {veg && <img src="/swiggey/Search/logo/veg.png" alt="" />}

                  {!veg && <img src="/swiggey/Search/logo/nonveg.jpg" alt="" />}
                  {each_item.name}
                </div>
                <div className={classes.item_part3_price}>
                  {each_item.price}
                </div>
                <div className={classes.item_part3_para}>{each_item.para}</div>
              </div>
              <div className={classes.item_part3_right}>
                <img src={each_item.image} alt="" />
                <div className={classes.addButton}>ADD</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchRestaurantFood;
