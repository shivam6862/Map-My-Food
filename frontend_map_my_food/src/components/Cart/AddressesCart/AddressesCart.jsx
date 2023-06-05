import React, { useState } from "react";
import classes from "./AddressesCart.module.css";
import SvgHome from "../../ui/User/SvgHome";

const AddressesCart = () => {
  const [address, setAddress] = useState([
    {
      address:
        "Qt No-3257,street 8,sector 4e,Bokaro, Street Number 7, Sector 4, Bokaro Steel City, Jharkhand 827004, India",
      time: "45 MIN",
    },
  ]);
  const deliverHere = () => {};
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Select delivey address </div>
      {address.length > 0 && (
        <div className={classes.heading1}>
          You have a saved address in the location
        </div>
      )}
      <div className={classes.boxes}>
        {address.map((data, index) => (
          <div className={classes.box} key={index}>
            <div className={classes.box_left}>
              <SvgHome />
            </div>
            <div className={classes.box_right}>
              <h1>Home</h1>
              <p>{data.address}</p>
              <p>{data.time}</p>
              <div className={classes.right_buttons}>
                <button onClick={deliverHere}>DELIVER HERE</button>
              </div>
            </div>
          </div>
        ))}
        <div className={classes.box}>
          <div className={classes.box_left}>
            <img src="/swiggey/location.png" alt="" />
          </div>
          <div className={classes.box_right}>
            <h1>Add New Address</h1>
            <p>Dumka, Jharkhand 814101 , Jharkhand</p>
            <div className={classes.right_buttons}>
              <button onClick={deliverHere}>ADD NEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesCart;
