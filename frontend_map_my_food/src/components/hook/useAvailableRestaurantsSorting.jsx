import AvailablerestaurantsData from "../TemporaryData/AvailableRestaurantsData.json";
import { useLocationLocalStorage } from "./LocationLocalStorage";

const useAvailableRestaurantsSorting = () => {
  const { fetchPincode } = useLocationLocalStorage();
  const pincode = fetchPincode();
  const AvailableRestaurantsSortingData = async (sorting) => {
    const data = await fetch(
      `${
        import.meta.env.VITE_REACT_BACKEND_URL
      }/availablerestaurants/${pincode}/${sorting}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return AvailablerestaurantsData;
      });
    return data;
  };
  return { AvailableRestaurantsSortingData };
};

export default useAvailableRestaurantsSorting;
