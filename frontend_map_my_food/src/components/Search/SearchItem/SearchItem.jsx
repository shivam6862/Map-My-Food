import React from "react";
import classes from "./SearchItem.module.css";

const SearchItem = ({ searchItemData, search }) => {
  return (
    <div className={classes.container}>
      <div className={classes.items_box}>
        {searchItemData.map((item, index) => {
          const category = Object.keys(item)[1];
          const items = item[category];
          return (
            <div key={index} className={classes.items}>
              <h3>{category}</h3>
              <ul className={classes.item}>
                {items.map((item, index) => (
                  <li key={index} className={classes.item_data}>
                    <img src={item.image} alt={item.name} />
                    <div className={classes.name}>
                      <span>
                        {item.name} {search ? "'" : ""} {search}
                        {search ? "'" : ""}
                      </span>
                      <span>Dish</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchItem;
