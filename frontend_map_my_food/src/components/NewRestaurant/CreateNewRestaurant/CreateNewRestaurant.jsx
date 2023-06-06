import React from "react";
import classes from "../Restarurant.module.css";
import Question from "../Question/Question";
import UploadImage from "../UploadImage/UploadImage";
import Curd from "../Crud/Crud";

const CreateNewRestaurant = () => {
  const allQuestion = [
    "address",
    "Restaurant",
    "Restaurant dish",
    "location",
    "Free Delivery on Order Distance",
    "Free Delivery on Order Above",
    "rating",
    "rating Count",
    "time",
    "phone number",
    "opening hours",
    "price",
    "pincode",
  ];
  return (
    <div className={classes.container}>
      <div className={classes.heading}> Create New Restaurant</div>
      <div className={classes.part1_a}>Restaurant picture</div>
      <div className={classes.part1}>
        <UploadImage ids={"CreateNewRestaurant"} />
        <div className={classes.curd}>
          <Curd />
        </div>
      </div>
      <div className={classes.allquestion}>
        {allQuestion.map((question, index) => (
          <Question question={question} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CreateNewRestaurant;
