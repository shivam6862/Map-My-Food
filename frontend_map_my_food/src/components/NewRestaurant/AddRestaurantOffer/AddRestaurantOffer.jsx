import React from "react";
import classes from "../Restarurant.module.css";
import Question from "../Question/Question";
import UploadImage from "../UploadImage/UploadImage";
import Curd from "../Crud/Crud";

const AddRestaurantOffer = () => {
  const offers = ["percentage", "above"];
  return (
    <div className={classes.container}>
      <div className={classes.heading}> Add Restaurant Offer</div>
      <div className={classes.part1_a}>Offer picture</div>
      <div className={classes.part1}>
        <UploadImage ids={"AddRestaurantOffer"} />
        <div className={classes.curd}>
          <Curd />
        </div>
      </div>
      <div className={classes.allquestion}>
        {offers.map((offer, index) => (
          <Question question={offer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AddRestaurantOffer;
