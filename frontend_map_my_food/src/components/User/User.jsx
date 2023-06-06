import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./User.module.css";
import Header from "./Header/Header";
import Loading from "./Loading/Loading";
import Navigation from "./Navigation/Navigation";
import Orders from "./orders/Orders";
import Addresses from "./addresses/Addresses";
import Favourites from "./favourites/Favourites";
import Payments from "./payments/Payments";
import Settings from "./settings/Settings";
import Super from "./super/Super";
import UpdateProfile from "./updateProfile/updateProfile";

const User = () => {
  const { page } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);
  return (
    <div className={classes.container}>
      {isShowEdit && (
        <>
          <div
            className={classes.backdrop}
            onClick={() => {
              setIsShowEdit(false);
            }}
          ></div>
          <div className={classes.profile}>
            <UpdateProfile setIsShowEdit={setIsShowEdit} />
          </div>
        </>
      )}
      <Header setIsShowEdit={setIsShowEdit} />
      <div className={classes.boxes}>
        <div className={classes.inner_box}>
          <Navigation />
          <div className={classes.box}>
            <div className={classes.loading}>{isLoading && <Loading />}</div>
            {!isLoading && page == "orders" && <Orders />}
            {!isLoading && page == "super" && <Super />}
            {!isLoading && page == "favourites" && <Favourites />}
            {!isLoading && page == "payments" && <Payments />}
            {!isLoading && page == "manage_addresses" && <Addresses />}
            {!isLoading && page == "settings" && <Settings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
