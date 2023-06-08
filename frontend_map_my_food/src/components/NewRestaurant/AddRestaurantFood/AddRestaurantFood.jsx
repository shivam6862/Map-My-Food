import React, { useState, useEffect } from "react";
import classes from "../Restarurant.module.css";
import Question from "../Question/Question";
import UploadImage from "../UploadImage/UploadImage";
import Curd from "../Crud/Crud";

const AddRestaurantFood = ({ food }) => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
    Dtime: "",
    category: "",
    veg: "",
    star: "",
    timeRequired: "",
    image: "",
  });
  const [imageToBackend, setImageToBackend] = useState(null);
  useEffect(() => {
    if (food != undefined) {
      setValues({
        name: food.name || "",
        price: food.price || "",
        description: food.description || "",
        Dtime: food.Dtime || "",
        category: food.category || "",
        veg: food.veg || "",
        star: food.star || "",
        timeRequired: food.timeRequired || "",
        image: food.image || "",
      });
    }
  }, []);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}> Add Restaurant Food</div>
      <div className={classes.part1_a}>Food picture</div>
      <div className={classes.part1}>
        {food && (
          <UploadImage
            ids={food.itemId}
            srcLink={`${import.meta.env.VITE_REACT_BACKEND_URL}${food.image}`}
            setImageToBackend={setImageToBackend}
          />
        )}
        {!food && (
          <UploadImage
            ids={"AddRestaurantFood"}
            srcLink={null}
            setImageToBackend={setImageToBackend}
          />
        )}
        <div className={classes.curd}>
          {food && (
            <Curd
              page={"restaurantfood"}
              data={values}
              id={food.itemId}
              imageToBackend={imageToBackend}
            />
          )}
          {!food && (
            <Curd
              page={"restaurantfood"}
              data={values}
              imageToBackend={imageToBackend}
            />
          )}
        </div>
      </div>
      <div className={classes.allquestion}>
        {Object.entries(values).map(([question, value]) => (
          <Question
            key={question}
            value={value}
            question={question}
            handleChange={handleChange(question)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddRestaurantFood;
