import React, { useState, useEffect, useContext } from "react";
import classes from "./Location.module.css";
import useIndianCitys from "../hook/useIndianCity";
import LocationContext from "../store/location/Location-context";

const Location = () => {
  const locationCtx = useContext(LocationContext);
  const open = locationCtx.open;
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

  return (
    <div className={classes.container}>
      {open && (
        <div
          className={classes.backdrop}
          onClick={() => {
            locationCtx.onHide();
          }}
        ></div>
      )}
      {open && (
        <div className={classes.location}>
          <div className={classes.Input_searchLocations}>
            <div
              className={classes.close}
              onClick={() => {
                locationCtx.onHide();
              }}
            >
              <div className={classes.line1}></div>
              <div className={classes.line2}></div>
            </div>
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
        </div>
      )}
    </div>
  );
};

export default Location;
