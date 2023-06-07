import { useNotification } from "./useNotification";
import { useLocationLocalStorage } from "./LocationLocalStorage";

const useCreateNewRestaurantData = () => {
  const { NotificationHandler } = useNotification();
  const { fetchRestaurantId } = useLocationLocalStorage();
  const CreateNewRestaurantData = async (data, page, type, id) => {
    const RestaurantId = fetchRestaurantId();
    if (page == "restaurantfood") {
      data = {
        RestaurantId: RestaurantId,
        itemId: id,
        food: [data],
      };
    }
    if (page == "restaurantoffer") {
      data = {
        RestaurantId: RestaurantId,
        offerId: id,
        offers: [data],
      };
    }
    if (page == "restaurant") {
      data = {
        RestaurantId: RestaurantId,
        Restaurant: data,
      };
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/${page}`,
        {
          method: type,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responsedata = await response.json();
      NotificationHandler(responsedata.message, "Info");
      return responsedata.response;
    } catch (err) {
      console.log(err);
    }
  };
  return { CreateNewRestaurantData };
};

export default useCreateNewRestaurantData;
