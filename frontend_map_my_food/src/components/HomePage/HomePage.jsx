import React, { useContext, useEffect, useState } from "react";
import Home from "../home/Home";
import Restaurants from "../restaurants/Restaurants";

import { useLocationLocalStorage } from "../hook/LocationLocalStorage";
import LocationContext from "../store/location/Location-context";

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
