import React, { useEffect, useState } from "react";
import classes from "../Restarurant.module.css";
import Question from "../Question/Question";
import UploadImage from "../UploadImage/UploadImage";
import Curd from "../Crud/Crud";

const AddRestaurantOffer = ({ offer }) => {
  const [values, setValues] = useState({
    percentage: "",
    above: "",
    image: "",
  });
  const [imageToBackend, setImageToBackend] = useState(null);
  useEffect(() => {
    if (offer != undefined) {
      setValues({
        percentage: offer.percentage || "",
        above: offer.above || "",
        image: offer.image || "",
      });
    }
  }, []);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}> Add Restaurant Offer</div>
      <div className={classes.part1_a}>Offer picture</div>
      <div className={classes.part1}>
        {offer && (
          <UploadImage
            ids={offer.offerId}
            srcLink={`${import.meta.env.VITE_REACT_BACKEND_URL}${offer.image}`}
            setImageToBackend={setImageToBackend}
          />
        )}
        {!offer && (
          <UploadImage
            ids={"AddRestaurantOffer"}
            srcLink={null}
            setImageToBackend={setImageToBackend}
          />
        )}
        <div className={classes.curd}>
          {offer && (
            <Curd
              page={"restaurantoffer"}
              data={values}
              id={offer.offerId}
              imageToBackend={imageToBackend}
            />
          )}
          {!offer && (
            <Curd
              page={"restaurantoffer"}
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

export default AddRestaurantOffer;
