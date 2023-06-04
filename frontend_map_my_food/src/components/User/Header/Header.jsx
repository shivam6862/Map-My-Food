import React from "react";
import classes from "./Header.module.css";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";

const Header = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const data = fetchPersonalDetails();
  const name = data.data.name;
  const email = data.data.email;
  const nummber = data.data.number;
  return (
    <div className={classes.container}>
      <h1>{name}</h1>
      <div className={classes.bottom}>
        <div>{nummber}</div>
        <div>.</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default Header;
