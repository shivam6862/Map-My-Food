import Indiancitys from "../TemporaryData/IndiaCity.json";

export const useLocationLocalStorage = () => {
  const fetchLocation = () => {
    const storedData = localStorage.getItem("recentLocationSearch");
    const location = JSON.parse(storedData);
    return location;
  };
  const fetchPincode = () => {
    const storedData = localStorage.getItem("pincode");
    const pincode = JSON.parse(storedData);
    return pincode;
  };
  const updateLocation = (newLocation) => {
    let currentLocation = [];
    const pastLocation = localStorage.getItem("recentLocationSearch");
    if (pastLocation) currentLocation = JSON.parse(pastLocation);
    const isLocationExists = currentLocation.includes(newLocation);
    if (isLocationExists) {
      const index = currentLocation.indexOf(newLocation);
      currentLocation.splice(index, 1);
    }
    currentLocation.unshift(newLocation);
    localStorage.setItem(
      "recentLocationSearch",
      JSON.stringify(currentLocation)
    );
    updatePincode(newLocation);
  };
  const updatePincode = (location) => {
    let pincode = "";
    const nameToMatch = location.split(",")[0].trim();
    for (let i = 0; i < Indiancitys.length; i++) {
      if (Indiancitys[i].name === nameToMatch) {
        pincode = Indiancitys[i].pincode;
        break;
      }
    }
    localStorage.setItem("pincode", JSON.stringify(pincode));
  };

  return { fetchLocation, updateLocation, fetchPincode };
};
