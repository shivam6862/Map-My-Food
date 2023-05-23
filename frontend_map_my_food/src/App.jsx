import { AllRoutes } from "./AllRoutes";
import classes from "./App.module.css";
import Auth from "./components/Authentication/Auth";
import Header from "./components/header/Header";
import Notifications from "./components/Notification/Notifications";
import Location from "./components/Location/Location";

import { useLocationLocalStorage } from "./components/hook/LocationLocalStorage";
import { useState, useContext, useEffect } from "react";
import LocationContext from "./components/store/location/Location-context";

function App() {
  const locationContextCtx = useContext(LocationContext);
  const { fetchLocation } = useLocationLocalStorage();
  const [isLocation, setIsLocation] = useState(fetchLocation());
  useEffect(() => {
    setIsLocation(fetchLocation());
  }, [locationContextCtx.localStorageLocation]);

  return (
    <div className={classes.App}>
      <Location />
      <Notifications />
      {isLocation && (
        <div className={classes.header}>
          <Header />
        </div>
      )}
      <div className={`${isLocation ? classes.AllRoutes : classes.allRoute}`}>
        <AllRoutes />
      </div>
      <Auth />
    </div>
  );
}

export default App;
