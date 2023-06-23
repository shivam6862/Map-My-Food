import { useState, useContext, useEffect } from "react";
import classes from "./App.module.css";
import Location from "./components/Location/Location";
import Notifications from "./components/Notification/Notifications";
import Header from "./components/header/Header";
import { AllRoutes } from "./AllRoutes";
import Auth from "./components/Authentication/Auth";
import Footer from "./components/Footer/Footer";
import LocationContext from "./components/store/location/Location-context";
import { useLocationLocalStorage } from "./components/hook/LocationLocalStorage";

function App() {
  const locationContextCtx = useContext(LocationContext);
  const { fetchLocation, fetchPersonalDetails } = useLocationLocalStorage();
  const [isLocation, setIsLocation] = useState(fetchLocation());
  // const islogIn = fetchPersonalDetails();
  const [islogIn, setIslogIn] = useState(fetchPersonalDetails());
  useEffect(() => {
    setIsLocation(fetchLocation());
    setIslogIn(true);
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
        <AllRoutes islogIn={islogIn} />
      </div>
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
