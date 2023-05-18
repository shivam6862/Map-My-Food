import React, { useState } from "react";
import classes from "./RecipesLoading.module.css";
import RecipesData from "../../../TemporaryData/RecipesData.json";

const RecipesLoading = () => {
  const [datas, setData] = useState(RecipesData);
  return (
    <div className={classes.container}>
      {datas.map((item, index) => {
        return (
          <div key={index} className={classes.container_bottom}>
            {Object.keys(item).map((key) => {
              return (
                <div className={classes.box_above} key={index}>
                  <p
                    className={`${classes.opening} ${classes.animated_bg}`}
                  ></p>
                  <div key={key} className={classes.box}>
                    {Object.keys(item[key]).map((subKey) => {
                      return (
                        <div
                          key={subKey}
                          className={`${classes.each_item} ${classes.animated_bg}`}
                        >
                          <div
                            className={`${classes.image} ${classes.animated_bg_dark}`}
                          ></div>
                          <div className={classes.note}>
                            <h3 className={`${classes.animated_bg_dark}`}></h3>
                            <p className={`${classes.animated_bg_dark}`}></p>
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

export default RecipesLoading;
