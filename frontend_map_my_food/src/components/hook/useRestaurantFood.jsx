import datarestaurantfoodData from "../TemporaryData/Search/SearchRestaurants.json";

const useRestaurantFood = () => {
  const RestaurantFoodData = async (id) => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/restaurantfood/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return datarestaurantfoodData;
      });
    return data;
  };
  return { RestaurantFoodData };
};

export default useRestaurantFood;
