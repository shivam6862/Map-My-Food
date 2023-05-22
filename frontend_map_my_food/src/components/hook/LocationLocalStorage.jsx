export const useLocationLocalStorage = () => {
  const fetchLocation = () => {
    const storedData = localStorage.getItem("recentLocationSearch");
    const location = JSON.parse(storedData);
    return location;
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
  };

  return { fetchLocation, updateLocation };
};
