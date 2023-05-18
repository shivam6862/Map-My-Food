import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import Search from "./svg/Search";
import Offers from "./svg/Offers";
import Help from "./svg/Help";
import Sign from "./svg/Sign";

const Header = () => {
  const [place, setPlace] = useState("Dumka, Jharkhand, India");
  const [number, setNumber] = useState(0);
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
        <Link to={"/Restaurants"} className={classes.left_place}>
          <span>Other </span>
          {place}
        </Link>
        <i className={classes.left_image_arrow}></i>
      </div>
      <div className={classes.right}>
        <Link to={"/search"} className={classes.right_part}>
          <div className={classes.right_image}>
            <Search />
          </div>
          <div
            className={`${
              isActive("/search") ? classes.active : classes.right_text
            }`}
          >
            Search
          </div>
        </Link>
        <Link to={"/offers/restaurant"} className={classes.right_part}>
          <div className={classes.right_image}>
            <Offers />
          </div>
          <div
            className={`${
              isActive("/offers") ? classes.active : classes.right_text
            }`}
          >
            Offers <span>NEW</span>
          </div>
        </Link>
        <Link to={"/supports"} className={classes.right_part}>
          <div className={classes.right_image}>
            <Help />
          </div>
          <div
            className={`${
              isActive("/supports") ? classes.active : classes.right_text
            }`}
          >
            Help
          </div>
        </Link>
        <Link to={"/"} className={classes.right_part}>
          <div className={classes.right_image}>
            <Sign />
          </div>
          <div
            className={`${isActive("/") ? classes.active : classes.right_text}`}
          >
            Sign In
          </div>
        </Link>
        <Link to={"/checkout"} className={classes.right_part}>
          <div className={classes.right_number}>{number}</div>
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
