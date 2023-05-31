import recipesData from "../TemporaryData/RecipesData.json";
import { useLocationLocalStorage } from "./LocationLocalStorage";

const useRecipes = () => {
  const { fetchPincode } = useLocationLocalStorage();
  const pincode = fetchPincode();
  const RecipesData = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/recipes/${pincode}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return recipesData;
      });
    return data;
  };
  return { RecipesData };
};

export default useRecipes;
