import React from "react";
import classes from "./Process.module.css";
import Sign from "../../header/svg/Sign";

const Process = () => {
  return (
    <div className={classes.cotainer}>
      <div className={classes.boxes}>
        <div className={classes.left_border}></div>
        <div className={classes.box}>
          <div className={classes.location}>
            <Sign />
          </div>
          <div className={classes.part1}>
            <div className={classes.heading}>
              <h1>Account</h1>
              <p>
                To place your order now, log in to your existing account or sign
                up.
              </p>
            </div>
            <div className={classes.buttons}>
              <button className={classes.button_a}>
                <div className={classes.button_text1a}>Have an account?</div>
                <div className={classes.button_text2a}>LOG IN</div>
              </button>
              <button className={classes.button_b}>
                <div className={classes.button_text1b}>New to Map My Food?</div>
                <div className={classes.button_text2b}>SIGN UP</div>
              </button>
            </div>
          </div>
          <div className={classes.part2}>
            <img src="/swiggey/Auth/login.webp" alt="" />
          </div>
        </div>
        <div className={classes.box}>
          <h1>Delivery address</h1>
          <div className={classes.location}>
            <img src="/swiggey/Logo/logo_2022.png" alt="" />
          </div>
        </div>
        <div className={classes.box}>
          <h1>Payment</h1>
          <div className={classes.location}>
            <img src="/logo.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
