import React from "react";
import classes from "./Footer.module.css";
import company from "../TemporaryData/company.json";
import contact from "../TemporaryData/contact.json";
import legel from "../TemporaryData/legal.json";
import DeliverTo from "./DeliverTo/DeliverTo";
const Footer = () => {
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
          <DeliverTo />
        </div>
        <div className={classes.bottom_last}>
          <div className={classes.part1_img}>
            <img src="/swiggey/Logo/logo_2022.png" alt="logo" />
            <h2>Map my Food</h2>
          </div>
          <div className={classes.part2}>© 2023 Map my food</div>
          <div className={classes.part3}>
            <div>
              <img src="/swiggey/Logo/Footer/facebook.png" alt="" />
            </div>
            <div>
              <img src="/swiggey/Logo/Footer/pinterest.png" alt="" />
            </div>
            <div>
              <img src="/swiggey/Logo/Footer/instagram.png" alt="" />
            </div>
            <div>
              <img src="/swiggey/Logo/Footer/twitter.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
