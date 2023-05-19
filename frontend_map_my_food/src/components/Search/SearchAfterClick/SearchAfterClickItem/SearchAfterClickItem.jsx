import React from "react";
import classes from "./SearchAfterClickItem.module.css";

const SearchAfterClickItem = ({ searchItemAfterClickData }) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {searchItemAfterClickData.map((item, index) => {
          const category = Object.keys(item)[0];
          const items = item[category];
          return (
            <div className={classes.items} key={index}>
              <h1>{category}</h1>
              {items.map((each_item, index_j) => {
                return (
                  <div className={classes.item} key={index_j}>
                    <div>
                      <h1>{each_item.hotal}</h1>
                      <div>{each_item.star}</div>
                    </div>
                    <div>{each_item.time}</div>
                    <div>
                      <div>
                        <div>{each_item.name}</div>
                        <div>{each_item.price}</div>
                        <div>{each_item.para}</div>
                      </div>
                      <div>
                        <img src={each_item.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchAfterClickItem;
