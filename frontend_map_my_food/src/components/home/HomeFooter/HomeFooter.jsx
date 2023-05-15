import React from "react";
import classes from "./HomeFooter.module.css";

import company from "../../TemporaryData/company";
import contact from "../../TemporaryData/contact";
import legel from "../../TemporaryData/legal";

import Set from "../../TemporaryData/set";

const HomeFooter = () => {
  return (
    <div className={classes.box}>
      <div className={classes.top}>
        <div className={classes.part}>
          <h1>Company</h1>
          {company.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>
        <div className={classes.part}>
          <h1>Contact</h1>
          {contact.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>
        <div className={classes.part}>
          <h1>Legel</h1>
          {legel.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>
        <div className={classes.part4}>
          <img src="/swiggey/Logo/googlePlay.png" alt="googlePlay" />
          <img src="/swiggey/Logo/appStore.png" alt="appStore" />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottom_top}>
          <Set />
        </div>
        <div className={classes.bottom_last}>
          <div className={classes.part1_img}>
            <img src="/swiggey/Logo/logo_2022.png" alt="logo" />
            <h2>Map my Food</h2>
          </div>
          <div className={classes.part2}>© 2023 Map my food</div>
          <div className={classes.part3}>
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
