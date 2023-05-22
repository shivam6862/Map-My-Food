import React from "react";
import { useState } from "react";

const LocationContext = React.createContext({
  open: false,
  onShow: (name) => {},
  onHide: (name) => {},
});

export const LocationContextProvider = (props) => {
  const [open, setOpen] = useState(false);
  const showHandler = (name) => {
    setOpen(true);
  };
  const hideHandler = (name) => {
    setOpen(false);
  };
  return (
    <LocationContext.Provider
      value={{
        open: open,
        onShow: showHandler,
        onHide: hideHandler,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
