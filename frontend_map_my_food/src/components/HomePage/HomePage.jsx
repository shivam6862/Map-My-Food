import React, { useContext, useEffect, useState } from "react";
import Home from "../home/Home";
import Restaurants from "../restaurants/Restaurants";
import LocationContext from "../store/location/Location-context";
import { useLocationLocalStorage } from "../hook/LocationLocalStorage";

const HomePage = () => {
  const { fetchLocation } = useLocationLocalStorage();
  const [isLocation, setIsLocation] = useState(fetchLocation());
  const locationContextCtx = useContext(LocationContext);
  useEffect(() => {
    setIsLocation(fetchLocation());
  }, [locationContextCtx.localStorageLocation]);
  return <>{isLocation ? <Restaurants /> : <Home />}</>;
};

export default HomePage;
