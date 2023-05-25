import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./OfferHeader.module.css";

const OfferHeader = () => {
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname;
  };
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1>Offers for you</h1>
          <p>Explore top deals and offers exclusively for you!</p>
        </div>
        <div className={classes.right}>
          <img src="/swiggey/Logo/offer.webp" alt="" />
        </div>
      </div>
      <div className={classes.Link_to_pages}>
        <Link
          to={"/offers/restaurant"}
          className={`${
            isActive("/offers/restaurant") ? classes.active : classes.link_item
          }`}
        >
          Restaurant offers
        </Link>
        <Link
          to={"/offers/payment"}
          className={`${
            isActive("/offers/payment") ? classes.active : classes.link_item
          }`}
        >
          Payment offers/Coupons
        </Link>
      </div>
    </div>
  );
};

export default OfferHeader;
