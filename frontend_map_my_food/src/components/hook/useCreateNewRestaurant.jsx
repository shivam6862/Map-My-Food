import { useNotification } from "./useNotification";
import { useLocationLocalStorage } from "./LocationLocalStorage";

const useCreateNewRestaurantData = () => {
  const { NotificationHandler } = useNotification();
  const { fetchRestaurantId, fetchPersonalDetails } = useLocationLocalStorage();
  const CreateNewRestaurantData = async (
    data,
    page,
    type,
    id,
    imageToBackend
  ) => {
    const RestaurantId = fetchRestaurantId();
    const formData = new FormData();
    if (page == "restaurantfood") {
      formData.append("file", imageToBackend);
      formData.append("RestaurantId", RestaurantId);
      formData.append("itemId", id);
      formData.append("data", JSON.stringify([data]));
    }
    if (page == "restaurantoffer") {
      formData.append("file", imageToBackend);
      formData.append("RestaurantId", RestaurantId);
      formData.append("offerId", id);
      formData.append("data", JSON.stringify([data]));
    }
    if (page == "restaurant") {
      const PersonalDetails = await fetchPersonalDetails();
      var userId = "";
      if (PersonalDetails != undefined) userId = PersonalDetails.data.id;
      formData.append("file", imageToBackend);
      formData.append("userId", userId);
      formData.append("RestaurantId", RestaurantId);
      formData.append("data", JSON.stringify(data));
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/${page}`,
        {
          method: type,
          headers: {},
          body: formData,
        }
      );
      const responsedata = await response.json();
      NotificationHandler(responsedata.message, "Info");
      return responsedata.response;
    } catch (err) {
      console.log(err);
      NotificationHandler("Check your connection!", "Error");
      return [];
    }
  };
  return { CreateNewRestaurantData };
};

export default useCreateNewRestaurantData;
