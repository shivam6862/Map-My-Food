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

  const updatePersonalDetails = (data) => {
    localStorage.setItem("PersonalDetails", JSON.stringify(data));
    if (data.data.ResturentId) updateRestaurantId(data.data.ResturentId);
  };
  const fetchPersonalDetails = () => {
    const Data = localStorage.getItem("PersonalDetails");
    const response = JSON.parse(Data);
    return response;
  };
  const removePersonalDetails = () => {
    localStorage.removeItem("PersonalDetails");
  };

  const updateRestaurantId = (data) => {
    localStorage.setItem("restaurantId", JSON.stringify(data));
  };
  const fetchRestaurantId = () => {
    const Data = localStorage.getItem("restaurantId");
    const response = JSON.parse(Data);
    return response;
  };

  return {
    fetchLocation,
    updateLocation,
    fetchPincode,
    updatePersonalDetails,
    fetchPersonalDetails,
    removePersonalDetails,
    updateRestaurantId,
    fetchRestaurantId,
  };
};
