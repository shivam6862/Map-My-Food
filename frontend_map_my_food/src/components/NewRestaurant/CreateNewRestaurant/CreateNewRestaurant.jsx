import React, { useState, useEffect } from "react";
import classes from "../Restarurant.module.css";
import Question from "../Question/Question";
import UploadImage from "../UploadImage/UploadImage";
import Curd from "../Crud/Crud";
import useGetFoodsAndOffers from "../../hook/useGetFoodsAndOffers";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";

const CreateNewRestaurant = () => {
  const { GetFoodsAndOffersData } = useGetFoodsAndOffers();
  const { fetchRestaurantId } = useLocationLocalStorage();
  const [image, setImage] = useState(null);
  const [imageToBackend, setImageToBackend] = useState(null);
  const [values, setValues] = useState({
    address: "",
    Restaurant: "",
    Restaurant_dish: "",
    location: "",
    FreeDeliveryonOrderDistance: "",
    FreeDeliveryonOrderAbove: "",
    rating: "",
    ratingCount: "",
    time: "",
    phone_number: "",
    opening_hours: "",
    price: "",
    pincode: "",
    image: "",
  });
  useEffect(() => {
    const fetchdata = async () => {
      const response = await GetFoodsAndOffersData("restaurant");
      const { _id, RestaurantId, ...rest } = response;
      setValues(rest);
      setImage(response.image);
    };
    if (fetchRestaurantId() != undefined) fetchdata();
  }, []);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}> Create New Restaurant</div>
      <div className={classes.part1_a}>Restaurant picture</div>
      <div className={classes.part1}>
        {image && (
          <UploadImage
            ids={"CreateNewRestaurant"}
            srcLink={`${import.meta.env.VITE_REACT_BACKEND_URL}${image}`}
            setImageToBackend={setImageToBackend}
          />
        )}
        {!image && (
          <UploadImage
            ids={"CreateNewRestaurant"}
            srcLink={null}
            setImageToBackend={setImageToBackend}
          />
        )}
        <div className={classes.curd}>
          <Curd
            page={"restaurant"}
            data={values}
            id={fetchRestaurantId()}
            imageToBackend={imageToBackend}
          />
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

export default CreateNewRestaurant;
