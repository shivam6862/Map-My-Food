import categorywisefoodData from "../TemporaryData/Search/Big.json";
import { useLocationLocalStorage } from "./LocationLocalStorage";

const useCategoryWiseFood = () => {
  const { fetchPincode } = useLocationLocalStorage();
  const pincode = fetchPincode();
  const CategoryWiseFoodData = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/categorywisefood/${pincode}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return categorywisefoodData;
      });
    return data;
  };
  return { CategoryWiseFoodData };
};

export default useCategoryWiseFood;
