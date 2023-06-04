import React, { useState } from "react";
import classes from "./Settings.module.css";

const Settings = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    if (isChecked) setIsChecked(false);
    else setIsChecked(true);
  };
  return (
    <div className={classes.container}>
      <div className={classes.first}>SMS Preferences</div>
      <div className={classes.second}>
        Order related SMS cannot be disabled as they are critical to provide
        service
      </div>
      <div className={classes.third}>
        <div className={classes.third_a}>
          Recommendations & Reminders
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>
          <div className={`${isChecked ? classes.box : classes.nonbox}`}>
            <div
              className={`${
                isChecked ? classes.veg_left : classes.nonveg_left
              }`}
            ></div>
            <div
              className={`${
                isChecked ? classes.veg_right : classes.nonveg_right
              }`}
            ></div>
          </div>
        </div>
        <div className={classes.third_b}>
          Keep this on to receive offer recommendations & timely reminders based
          on your interests
        </div>
      </div>
    </div>
  );
};

export default Settings;
