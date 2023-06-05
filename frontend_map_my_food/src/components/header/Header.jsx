import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import Svgsearch from "../ui/Svg/Svgsearch";
import Svgoffers from "../ui/Svg/Svgoffers";
import Svghelp from "../ui/Svg/Svghelp";
import Svgsign from "../ui/Svg/Svgsign";
import CartContext from "../store/cart/Cart-context";
import LocationContext from "../store/location/Location-context";
import AuthenticationContext from "../store/authentication/Authentication-context";
import { useLocationLocalStorage } from "../hook/LocationLocalStorage";

const Header = () => {
  const cartContextCtx = useContext(CartContext);
  const locationCtx = useContext(LocationContext);
  const authenticationContextCtx = useContext(AuthenticationContext);
  const { fetchLocation, fetchPersonalDetails } = useLocationLocalStorage();
  const place = fetchLocation();
  const personalDetails = fetchPersonalDetails();
  const [number, setNumber] = useState(cartContextCtx.addItems.length);
  useEffect(() => {
    setNumber(cartContextCtx.addItems.length);
  }, [cartContextCtx.addItems.length]);
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname.substring(0, 7) === pathname.substring(0, 7);
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Link to={"/"} className={classes.left_image}>
          <img src="/swiggey/Logo/logo_2022.png" alt="logo" />
        </Link>
        <div
          className={classes.left_phone_other}
          onClick={() => {
            locationCtx.onShow();
          }}
        >
          Other
        </div>
        <div
          className={classes.left_place}
          onClick={() => {
            locationCtx.onShow();
          }}
        >
          <span>Other </span>
          {place[0]}
        </div>
        <i
          className={classes.left_image_arrow}
          onClick={() => {
            locationCtx.onShow();
          }}
        ></i>
      </div>
      <div className={classes.right}>
        <Link to={"/search"} className={classes.right_part}>
          <div className={classes.right_image}>
            <Svgsearch />
          </div>
          <div
            className={`${
              isActive("/search") ? classes.active : classes.right_text
            }`}
          >
            Search
          </div>
        </Link>
        <Link
          to={"/offers/restaurant"}
          className={`${classes.right_part} ${classes.offers}`}
        >
          <div className={classes.right_image}>
            <Svgoffers />
          </div>
          <div
            className={`${
              isActive("/offers") ? classes.active : classes.right_text
            } ${classes.offers_text}`}
          >
            Offers <span>NEW</span>
          </div>
        </Link>
        <Link to={"/supports"} className={classes.right_part}>
          <div className={classes.right_image}>
            <Svghelp />
          </div>
          <div
            className={`${
              isActive("/supports") ? classes.active : classes.right_text
            }`}
          >
            Help
          </div>
        </Link>
        {personalDetails ? (
          <Link to={"/my-account/orders"} className={classes.right_part}>
            <div className={classes.right_image}>
              <Svgsign />
            </div>
            <div
              className={`${
                isActive("/my-account/orders")
                  ? classes.active
                  : classes.right_text
              }`}
            >
              {personalDetails.data.name.substr(0, 8)}
              {"..."}
            </div>
          </Link>
        ) : (
          <div
            className={classes.right_part}
            onClick={() => {
              authenticationContextCtx.onShow("LogInOpen");
            }}
          >
            <div className={classes.right_image}>
              <Svgsign />
            </div>
            <div
              className={`${
                isActive("/sign") ? classes.active : classes.right_text
              }`}
            >
              Sign In
            </div>
          </div>
        )}
        <Link to={"/checkout"} className={classes.right_part}>
          <div
            className={`${
              number == 0 ? classes.right_number : classes.right_number_green
            }`}
          >
            {number}
          </div>
          <div
            className={`${
              isActive("/checkout") ? classes.active : classes.right_text
            }`}
          >
            Cart
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
