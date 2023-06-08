import React, { useEffect, useState } from "react";
import classes from "./UploadImage.module.css";
import SvgUpload from "../../ui/User/SvgUpload";

const UploadImage = ({ ids, srcLink, setImageToBackend }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    setSelectedImage(srcLink);
  }, []);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setImageToBackend(file);
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={classes.file_input_wrapper}>
      <input
        type="file"
        id={ids}
        name={ids}
        className={classes.file_input}
        onChange={handleFileUpload}
      />
      <div className={classes.part1_b_a}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Uploaded Image"
            style={{ maxWidth: "65px", maxHeight: "65px" }}
          />
        )}
      </div>
      <label htmlFor={ids} className={classes.file_input_label}>
        <SvgUpload />
        Choose a file
      </label>
    </div>
  );
};

export default UploadImage;
