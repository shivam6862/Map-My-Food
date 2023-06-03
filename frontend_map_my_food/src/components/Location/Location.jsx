import React, { useState, useEffect, useContext } from "react";
import classes from "./Location.module.css";
import Svgcross from "../ui/Svg/Svgcross";
import LocationContext from "../store/location/Location-context";
import useIndianCitys from "../hook/useIndianCity";
import { useLocationLocalStorage } from "../hook/LocationLocalStorage";

const Location = () => {
  const locationCtx = useContext(LocationContext);
  const open = locationCtx.open;
  const { fetchLocation, updateLocation } = useLocationLocalStorage();
  const pastSearchLocation = fetchLocation();
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
    updateLocation(customerLocation);
    setLocation("");
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
              <Svgcross />
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
          <div className={classes.AllSearchLocationBox}>
            {pastSearchLocation.map((location, index) => (
              <div key={index} className={classes.searchLocationBox}>
                <img src="/swiggey/location.png" alt="" />
                <div
                  className={classes.searchLocation}
                  onClick={() => {
                    setCustomerLocation(location);
                  }}
                >
                  {location}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
