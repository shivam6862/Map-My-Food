import restaurantofferData from "../TemporaryData/Search/SearchRestaurants.json";

const useRestaurantOffers = () => {
  const RestaurantOffersData = async (id) => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/restaurantoffer/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return restaurantofferData;
      });
    return data;
  };
  return { RestaurantOffersData };
};

export default useRestaurantOffers;
