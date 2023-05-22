import React from "react";
import { useState } from "react";

const LocationContext = React.createContext({
  open: false,
  onShow: (name) => {},
  onHide: (name) => {},
  localStorageLocation: null,
  onLocalStorageLocation: (location) => {},
});

export const LocationContextProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [localStorageLocation, setLocalStorageLocation] = useState(null);
  const showHandler = (name) => {
    setOpen(true);
  };
  const hideHandler = (name) => {
    setOpen(false);
  };
  const onSetLocalStorageLocation = (location) => {
    setLocalStorageLocation(location);
  };
  return (
    <LocationContext.Provider
      value={{
        open: open,
        onShow: showHandler,
        onHide: hideHandler,
        localStorageLocation: localStorageLocation,
        onLocalStorageLocation: onSetLocalStorageLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
