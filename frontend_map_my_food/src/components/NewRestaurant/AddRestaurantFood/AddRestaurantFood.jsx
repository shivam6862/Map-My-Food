import React from "react";
import classes from "../Restarurant.module.css";
import Question from "../Question/Question";
import UploadImage from "../UploadImage/UploadImage";
import Curd from "../Crud/Crud";

const AddRestaurantFood = () => {
  const Food = [
    "name",
    "price",
    "description",
    "Dtime",
    "veg",
    "star",
    "time Required",
  ];
  return (
    <div className={classes.container}>
      <div className={classes.heading}> Add Restaurant Food</div>
      <div className={classes.part1_a}>Food picture</div>
      <div className={classes.part1}>
        <UploadImage ids={"AddRestaurantFood"} />
        <div className={classes.curd}>
          <Curd />
        </div>
      </div>
      <div className={classes.allquestion}>
        {Food.map((item, index) => (
          <Question question={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AddRestaurantFood;
