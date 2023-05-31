import React, { useState } from "react";
import classes from "./Recipes.module.css";

const Recipes = ({ datas }) => {
  return (
    <div className={classes.container}>
      {datas.map((item, index) => {
        return (
          <div key={index} className={classes.container_bottom}>
            {Object.keys(item).map((key) => {
              return (
                <div className={classes.box_above} key={index}>
                  <p className={classes.opening}>{key}</p>
                  <div key={key} className={classes.box}>
                    {Object.keys(item[key]).map((subKey) => {
                      const dataItem = item[key][subKey];
                      return (
                        <div key={subKey} className={classes.each_item}>
                          <div className={classes.image}>
                            <img
                              src={`${import.meta.env.VITE_REACT_BACKEND_URL}${
                                dataItem.image
                              }`}
                              alt=""
                              onError={(event) => {
                                event.target.onerror = null;
                                event.target.src = dataItem.image;
                              }}
                            />
                          </div>
                          <div className={classes.note}>
                            <h3>{dataItem.restaurant.substring(0, 12)}...</h3>
                            <p>{dataItem.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
