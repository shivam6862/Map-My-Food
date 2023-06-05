import React from "react";
import classes from "./Header.module.css";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";

const Header = ({ setIsShowEdit }) => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const data = fetchPersonalDetails();
  const name = data.data.name;
  const email = data.data.email;
  const nummber = data.data.number;
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>{name}</h1>
        <div className={classes.bottom}>
          <div>{nummber}</div>
          <div>.</div>
          <div>{email}</div>
        </div>
      </div>
      <div
        className={classes.right}
        onClick={() => {
          setIsShowEdit(true);
        }}
      >
        EDIT PROFILE
      </div>
    </div>
  );
};

export default Header;
