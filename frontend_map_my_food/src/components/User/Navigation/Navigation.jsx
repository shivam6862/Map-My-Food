import React from "react";
import classes from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import SvgOrder from "../../ui/User/SvgOrder";
import SvgSuper from "../../ui/User/SvgSuper";
import SvgFavourites from "../../ui/User/SvgFavourites";
import SvgPayment from "../../ui/User/SvgPayment";
import SvgAddressess from "../../ui/User/SvgAddressess";
import SvgSetting from "../../ui/User/SvgSetting";
import SvgLogOut from "../../ui/User/SvgLogOut";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";
import SvgRestaurant from "../../ui/User/SvgRestaurant";

const Navigation = () => {
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname;
  };
  const { removePersonalDetails } = useLocationLocalStorage();
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <Link
          to={"/my-account/orders"}
          className={`${
            isActive("/my-account/orders") ? classes.active : classes.item
          }`}
        >
          <SvgOrder />
          Orders
        </Link>
        <Link
          to={"/my-account/super"}
          className={`${
            isActive("/my-account/super") ? classes.active : classes.item
          }`}
        >
          <SvgSuper />
          Super
        </Link>
        <Link
          to={"/my-account/favourites"}
          className={`${
            isActive("/my-account/favourites") ? classes.active : classes.item
          }`}
        >
          <SvgFavourites />
          Favourites
        </Link>
        <Link
          to={"/my-account/payments"}
          className={`${
            isActive("/my-account/payments") ? classes.active : classes.item
          }`}
        >
          <SvgPayment />
          Payments
        </Link>
        <Link
          to={"/my-account/manage_addresses"}
          className={`${
            isActive("/my-account/manage_addresses")
              ? classes.active
              : classes.item
          }`}
        >
          <SvgAddressess />
          Addresses
        </Link>
        <Link
          to={"/my-account/settings"}
          className={`${
            isActive("/my-account/settings") ? classes.active : classes.item
          }`}
        >
          <SvgSetting />
          Settings
        </Link>
        <Link
          to={"/new-restaurant"}
          className={`${
            isActive("/new-restaurant") ? classes.active : classes.item
          }`}
        >
          <SvgRestaurant />
          New Restaurant
        </Link>
        <div
          className={`${
            isActive("/my-account/logout") ? classes.active : classes.item
          }`}
          onClick={() => {
            removePersonalDetails();
          }}
        >
          <SvgLogOut />
          Log out
        </div>
      </div>
    </div>
  );
};

export default Navigation;
