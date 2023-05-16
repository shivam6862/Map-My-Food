import React, { useEffect } from "react";

import classes from "./HomeHeader.module.css";
import { useState } from "react";

import AuthenticationContext from "../../store/authentication/Authentication-context";
import { useContext } from "react";

const HomeHeader = () => {
  const AuthenticationCtx = useContext(AuthenticationContext);
  const open = AuthenticationCtx.open;
  const showHandler = (name) => {
    AuthenticationCtx.onShow(name);
  };

  const [name, setName] = useState("Movie marathon?");
  const [count, setCount] = useState(0);

  const findFood = () => {
    console.log("findFood");
  };
  useEffect(() => {
    setTimeout(() => {
      if (count % 4 == 0) setName("Hungry?");
      if (count % 4 == 1) setName("Movie marathon?");
      if (count % 4 == 2) setName("Unexpected Guest");
      if (count % 4 == 3) setName("Late Night at Office?");
      setCount((prev) => 1 + prev);
    }, 3000);
  }, [count]);

  return (
    <div className={classes.box}>
      <div className={classes.left}>
        <div className={classes.part1}>
          <div className={classes.part1_img}>
            <img src="/swiggey/Logo/logo_2022.png" alt="logo" />
            <h2>Map My Food</h2>
          </div>
          <div className={classes.buttons}>
            <button
              onClick={() => {
                showHandler("LogInOpen");
              }}
              className={classes.login}
            >
              Login
            </button>
            <button
              onClick={() => {
                showHandler("signupOpen");
              }}
              className={classes.signup}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className={classes.part2}>
          <div className={classes.overflowPart}>
            <h2>{name}</h2>
          </div>
          <p>Order food from favourite restaurants near you.</p>
        </div>
        <div className={classes.part3}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your delivery location"
          />
          <button
            onClick={() => {
              findFood();
            }}
          >
            FIND FOOD
          </button>
        </div>
        <div className={classes.part4}>
          <h2>POPULAR CITIES IN INDIA</h2>
          <p>
            <span>Ahmedabad</span> Bangalore <span>Chennai</span> Delhi
            <span> Gurgaon </span> Kolkata
            <span> Hyderabad </span> Mumbai <span> Pune </span> & more.
          </p>
        </div>
      </div>
      <div className={classes.right}></div>
    </div>
  );
};

export default HomeHeader;
