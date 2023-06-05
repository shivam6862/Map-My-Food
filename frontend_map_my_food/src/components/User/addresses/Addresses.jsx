import React, { useState } from "react";
import classes from "./Addresses.module.css";
import SvgHome from "../../ui/User/SvgHome";

const Addresses = () => {
  const [address, setAddress] = useState([
    "Qt No-3257,street 8,sector 4e,Bokaro, Street Number 7, Sector 4, Bokaro Steel City, Jharkhand 827004, India",
  ]);
  const edit = () => {};
  const deleted = () => {};
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Manage Addresses</div>
      <div className={classes.boxes}>
        {address.map((data, index) => (
          <div className={classes.box} key={index}>
            <div className={classes.box_left}>
              <SvgHome />
            </div>
            <div className={classes.box_right}>
              <h1>Home</h1>
              <p>{data}</p>
              <div className={classes.right_buttons}>
                <button onClick={edit}>EDIT</button>
                <button onClick={deleted}>DELETE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
