import restaurantfoodData from "../TemporaryData/AvailableRestaurantsData.json";

const useRestaurantFood = () => {
  const RestaurantFoodData = async (id) => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/restaurantfood/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return restaurantfoodData;
      });
    return data;
  };
  return { RestaurantFoodData };
};

export default useRestaurantFood;
