import React, { useContext } from "react";
import Backdrop from "../ui/Backdrop";
import SignUP from "./SignUp";
import Verify from "./Verify";
import LogIn from "./LogIn";
import classes from "./Auth.module.css";
import AuthenticationContext from "../store/authentication/Authentication-context";

const Auth = () => {
  const AuthenticationCtx = useContext(AuthenticationContext);
  const open = AuthenticationCtx.open;
  return (
    <div className={classes.Auth_container}>
      {(open.signupOpen || open.VerifyOpen || open.LogInOpen) && (
        <Backdrop
          onClick={() => {
            AuthenticationCtx.onHide("all");
          }}
        />
      )}
      <div className={classes.auth_box}>
        {open.signupOpen && <SignUP />}
        {open.VerifyOpen && <Verify />}
        {open.LogInOpen && <LogIn />}
      </div>
    </div>
  );
};

export default Auth;
