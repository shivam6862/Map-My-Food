import React from "react";
import { useState } from "react";

const AuthenticationContext = React.createContext({
  open: [
    {
      signupOpen: false,
      VerifyOpen: false,
      LogInOpen: false,
      error: "",
    },
  ],
  details: [
    {
      phone: "",
      name: "",
      email: "",
      referralCode: "",
    },
  ],
  onShow: (name) => {},
  onHide: (name) => {},
  setDetails: ({ phone, name, email, referralCode }) => {},
});

export const AuthenticationContextProvider = (props) => {
  const [open, setOpen] = useState({
    signupOpen: false,
    VerifyOpen: false,
    LogInOpen: false,
    error: "",
  });

  const [details, setDetails] = useState({
    phone: "",
    name: "",
    email: "",
    referralCode: "",
  });

  const showHandler = (name) => {
    if (name == "VerifyOpen") {
      setOpen({
        error: "",
        ["LogInOpen"]: false,
        [name]: true,
        ["signupOpen"]: false,
      });
    } else if (name == "signupOpen") {
      setOpen({
        error: "",
        ["VerifyOpen"]: false,
        [name]: true,
        ["LogInOpen"]: false,
      });
    } else if (name == "LogInOpen") {
      setOpen({
        error: "",
        ["VerifyOpen"]: false,
        [name]: true,
        ["signupOpen"]: false,
      });
    }
  };

  const hideHandler = (name) => {
    if (name == "all")
      setOpen({
        signupOpen: false,
        VerifyOpen: false,
        LogInOpen: false,
        error: "",
      });
    else setOpen({ ...open, [name]: false });
  };

  const setNewDetails = (phone, name, email, referralCode) => {
    setDetails({
      phone: phone,
      name: name,
      email: email,
      referralCode: referralCode,
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        open: open,
        onShow: showHandler,
        onHide: hideHandler,
        setDetails: setNewDetails,
        details: details,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
