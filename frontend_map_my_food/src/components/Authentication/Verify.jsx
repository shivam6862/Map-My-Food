import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import Svgcross from "../ui/Svg/Svgcross";
import AuthenticationContext from "../store/authentication/Authentication-context";
import useAuth from "../hook/useAuth";

const Verify = () => {
  const { Auth } = useAuth();
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

  const submit = async (e) => {
    e.preventDefault();
    const response = await Auth({ otp: values.code, number: phone }, "verify");
    if (response == "true") {
      setValues({ code: "", open: true });
      AuthenticationCtx.onHide("VerifyOpen");
    }
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
          <Svgcross />
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
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default Verify;
