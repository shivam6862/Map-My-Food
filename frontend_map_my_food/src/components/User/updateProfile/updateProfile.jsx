import React, { useState } from "react";
import classes from "./UpdateProfile.module.css";
import Svgcross from "../../ui/Svg/Svgcross";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";
import useUpdateUserProfile from "../../hook/useUpdateUserProfile";

const UpdateProfile = ({ setIsShowEdit }) => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const data = fetchPersonalDetails();
  const { UpdateUserProfileData } = useUpdateUserProfile();
  const [number, setNumber] = useState(data.data.number);
  const [email, setEmail] = useState(data.data.email);
  const hideHandler = () => {
    setIsShowEdit(false);
  };
  const submit = async (place, newdata) => {
    await UpdateUserProfileData(place, newdata);
  };
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.part1}>
          <div
            className={classes.close}
            onClick={() => {
              hideHandler();
            }}
          >
            <Svgcross />
          </div>
          <div>Edit Profile</div>
        </div>
        <div className={classes.part2}>
          <div className={classes.heading}>Phone Number</div>
          <div className={classes.changeField}>
            <input
              type="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <button
              onClick={() => {
                submit("number", number);
              }}
            >
              CHANGE
            </button>
          </div>
        </div>
        <div className={classes.part2}>
          <div className={classes.heading}>Email Id</div>
          <div className={classes.changeField}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              onClick={() => {
                submit("email", email);
              }}
            >
              CHANGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
