import React from "react";
import { useState } from "react";
import classes from "./Auth.module.css";
import AuthenticationContext from "../store/authentication/Authentication-context";
import { useContext } from "react";

const Verify = () => {
  const AuthenticationCtx = useContext(AuthenticationContext);
  var phone = AuthenticationCtx.details.phone;
  if (phone == "") phone = "Phone number";
  const [values, setValues] = useState({
    code: "",
    open: false,
    error: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    const code = values.code;
    console.log(code);
    setValues({ code: "", open: true });
  };

  const hideHandler = () => {
    AuthenticationCtx.onHide("VerifyOpen");
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
              <span>or</span> login to your account
            </p>
            <div className={classes.underline}> </div>
          </div>
          <div className={classes.part1_right}>
            <img src="/swiggey/Auth/login.webp" alt="" />
          </div>
        </div>
        <div className={classes.form}>
          <input type="text" placeholder={phone} />
          <input
            type="number"
            placeholder="One time password"
            value={values.code}
            onChange={handleChange("code")}
          />
        </div>
        <div
          className={classes.continue}
          onClick={submit}
          style={{ margin: "1rem auto" }}
        >
          <a>VERIFY OTP</a>
        </div>
      </div>
    </div>
  );
};

export default Verify;
