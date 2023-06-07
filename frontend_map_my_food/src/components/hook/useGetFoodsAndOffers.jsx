import { useLocationLocalStorage } from "./LocationLocalStorage";

const useGetFoodsAndOffers = () => {
  const { fetchRestaurantId } = useLocationLocalStorage();
  const GetFoodsAndOffersData = async (type) => {
    const RestaurantId = fetchRestaurantId();
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/${type}/${RestaurantId}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return [];
      });
    return data;
  };
  return { GetFoodsAndOffersData };
};

export default useGetFoodsAndOffers;
