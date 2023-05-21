import React, { useEffect } from "react";
import classes from "./HomeHeader.module.css";
import { useState } from "react";

import AuthenticationContext from "../../store/authentication/Authentication-context";
import { useContext } from "react";

import useIndianCitys from "../../hook/useIndianCity";

import { useNotification } from "../../hook/useNotification";

const HomeHeader = () => {
  const { NotificationHandler } = useNotification();
  const [location, setLocation] = useState("");
  const [showSearchLocation, setSearchLocation] = useState({
    newIndianCity: [],
  });
  useEffect(() => {
    const searchLocation =
      location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
    const IndianCity = useIndianCitys(searchLocation);
    setSearchLocation(IndianCity);
  }, [location]);
  const setCustomerLocation = (customerLocation) => {
    setLocation(customerLocation);
  };

  const AuthenticationCtx = useContext(AuthenticationContext);
  const open = AuthenticationCtx.open;
  const showHandler = (name) => {
    NotificationHandler(name, "Success");
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
          <div className={classes.Input_searchLocations}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your delivery location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            {showSearchLocation.newIndianCity.length == 0 ? (
              <></>
            ) : (
              <div className={classes.searchLocations}>
                {showSearchLocation.newIndianCity.map((place, index) => (
                  <div
                    key={index}
                    className={classes.searchLocationBox}
                    onClick={() => {
                      setCustomerLocation(place);
                    }}
                  >
                    <img src="/swiggey/location.png" alt="" />
                    <div className={classes.searchLocation}>{place}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
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
