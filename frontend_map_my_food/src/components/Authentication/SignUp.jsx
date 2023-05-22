import React from "react";
import { useState } from "react";
import classes from "./Auth.module.css";
import AuthenticationContext from "../store/authentication/Authentication-context";
import { useContext } from "react";

const SignUP = () => {
  const AuthenticationCtx = useContext(AuthenticationContext);
  const open = AuthenticationCtx.open;
  const [values, setValues] = useState({
    phone: "",
    name: "",
    email: "",
    referralCode: "",
    open: false,
    error: "",
  });
  const [referral, setReferral] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const CONTINUE_submit = (e) => {
    e.preventDefault();
    AuthenticationCtx.setDetails(
      values.phone,
      values.name,
      values.email,
      values.referralCode
    );
    setValues({ phone: "", name: "", email: "", error: "", open: true });
    AuthenticationCtx.onShow("VerifyOpen");
  };

  const hideHandler = () => {
    AuthenticationCtx.onHide("signupOpen");
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div
          className={classes.close}
          onClick={() => {
            hideHandler();
          }}
        >
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
        </div>
        <div className={classes.part1}>
          <div className={classes.part1_left}>
            <h1>Sign up</h1>
            <p
              onClick={() => {
                AuthenticationCtx.onShow("LogInOpen");
              }}
            >
              <span>or</span>login to your account
            </p>
            <div className={classes.underline}> </div>
          </div>
          <div className={classes.part1_right}>
            <img src="/swiggey/Auth/login.webp" alt="" />
          </div>
        </div>
        <div className={classes.form}>
          <input
            type="number"
            placeholder="Phone number"
            value={values.phone}
            onChange={handleChange("phone")}
          />
          <input
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange("name")}
          />
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          {referral ? (
            <input
              type="text"
              placeholder="Referral Code"
              value={values.referralCode}
              onChange={handleChange("referralCode")}
            />
          ) : (
            <></>
          )}
        </div>
        {referral == false ? (
          <div
            className={classes.referral}
            onClick={() => {
              setReferral(true);
            }}
          >
            Have a referral code?
          </div>
        ) : (
          <></>
        )}
        <div
          className={classes.continue}
          onClick={(e) => {
            CONTINUE_submit(e);
          }}
        >
          <a>CONTINUE</a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default SignUP;
