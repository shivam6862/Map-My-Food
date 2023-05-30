import AvailablerestaurantsData from "../TemporaryData/AvailableRestaurantsData.json";

const useAvailableRestaurants = () => {
  const AvailableRestaurantsData = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/availablerestaurants`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return AvailablerestaurantsData;
      });
    return data;
  };
  return { AvailableRestaurantsData };
};

export default useAvailableRestaurants;
