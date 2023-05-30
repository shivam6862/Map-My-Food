import restaurantData from "../TemporaryData/Search/SearchRestaurants.json";

const useRestaurant = () => {
  const data = async (id) => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/restaurant/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return restaurantData;
      });
    return data;
  };
  return { data };
};

export default useRestaurant;
