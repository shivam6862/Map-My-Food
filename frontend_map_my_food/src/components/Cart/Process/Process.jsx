import React, { useContext } from "react";
import classes from "./Process.module.css";
import Svgsign from "../../ui/Svg/Svgsign";
import AuthenticationContext from "../../store/authentication/Authentication-context";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";
import AddressesCart from "../AddressesCart/AddressesCart";
import PaymentProcess from "../PaymentProcess/PaymentProcess";

const Process = () => {
  const authenticationContextCtx = useContext(AuthenticationContext);
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const personalDetails = fetchPersonalDetails();
  return (
    <div className={classes.cotainer}>
      <div className={classes.boxes}>
        <div className={classes.left_border}></div>
        {!personalDetails && (
          <div className={classes.box}>
            <div className={classes.location}>
              <Svgsign />
            </div>
            <div className={classes.part1}>
              <div className={classes.heading}>
                <h1>Account</h1>
                <p>
                  To place your order now, log in to your existing account or
                  sign up.
                </p>
              </div>
              <div className={classes.buttons}>
                <button
                  className={classes.button_a}
                  onClick={() => {
                    authenticationContextCtx.onShow("LogInOpen");
                  }}
                >
                  <div className={classes.button_text1a}>Have an account?</div>
                  <div className={classes.button_text2a}>LOG IN</div>
                </button>
                <button
                  className={classes.button_b}
                  onClick={() => {
                    authenticationContextCtx.onShow("signupOpen");
                  }}
                >
                  <div className={classes.button_text1b}>
                    New to Map My Food?
                  </div>
                  <div className={classes.button_text2b}>SIGN UP</div>
                </button>
              </div>
            </div>
            <div className={classes.part2}>
              <img src="/swiggey/Auth/login.webp" alt="" />
            </div>
          </div>
        )}
        <div className={classes.box}>
          {personalDetails ? <AddressesCart /> : <h1>Delivery address</h1>}
          <div className={classes.location}>
            <img src="/swiggey/Logo/logo_2022.png" alt="" />
          </div>
        </div>
        <PaymentProcess />
      </div>
    </div>
  );
};
export default Process;
