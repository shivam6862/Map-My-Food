import React, { useState } from "react";
import classes from "./AnimationBox.module.css";

const AnimationBox = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [left, setLeft] = useState(44);
  const [right, setRight] = useState(18);
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        {Array(left)
          .fill()
          .map((_, index) => (
            <div className={classes.left_box} key={index}>
              <div
                className={`${classes.left_circle} ${classes.animated_bg}`}
              ></div>
              <div
                className={`${classes.left_underline} ${classes.animated_bg}`}
              ></div>
            </div>
          ))}
      </div>
      <div className={classes.riget}>
        {Array(right)
          .fill()
          .map((_, index) => (
            <div className={classes.right_box} key={index}>
              <div className={classes.right_box_top}>
                <div
                  className={`${classes.right_box_top_dark} ${classes.animated_bg}`}
                ></div>
                <div
                  className={`${classes.right_box_top_light} ${classes.animated_bg_dark}`}
                ></div>
              </div>
              <div
                className={`${classes.right_box_bottom_line1} ${classes.animated_bg}`}
              ></div>
              <div
                className={`${classes.right_box_bottom_line2} ${classes.animated_bg}`}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnimationBox;
