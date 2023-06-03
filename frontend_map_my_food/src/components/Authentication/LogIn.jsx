import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import Svgcross from "../ui/Svg/Svgcross";
import AuthenticationContext from "../store/authentication/Authentication-context";
import useAuth from "../hook/useAuth";

const LogIn = () => {
  const { Auth } = useAuth();
  const AuthenticationCtx = useContext(AuthenticationContext);
  const [values, setValues] = useState({
    number: "",
    open: false,
    error: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await Auth({ number: values.number }, "signin");
    if (response == "true") {
      AuthenticationCtx.setDetails(values.number, "", "", "");
      setValues({ number: "", open: true });
      AuthenticationCtx.onShow("VerifyOpen");
    }
  };
  const hideHandler = () => {
    AuthenticationCtx.onHide("LogInOpen");
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
          <Svgcross />
        </div>
        <div className={classes.part1}>
          <div className={classes.part1_left}>
            <h1>Login</h1>
            <p
              onClick={() => {
                AuthenticationCtx.onShow("signupOpen");
              }}
            >
              <span>or</span> create an account
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
            placeholder="Phone Number"
            value={values.number}
            onChange={handleChange("number")}
          />
        </div>
        <div className={classes.continue} onClick={submit}>
          <a>Login </a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default LogIn;
