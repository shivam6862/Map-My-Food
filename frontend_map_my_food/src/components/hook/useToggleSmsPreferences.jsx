import { useLocationLocalStorage } from "./LocationLocalStorage";
import { useNotification } from "./useNotification";

const useToggleSmsPreferences = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const { NotificationHandler } = useNotification();
  const ToggleSmsPreferencesData = async () => {
    const id = fetchPersonalDetails().data.id;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/smsPreferences/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: "",
        }
      );
      const responsedata = await response.json();
      NotificationHandler(responsedata.message, "Info");
      return responsedata.response;
    } catch (err) {
      console.log(err);
      NotificationHandler("Check your connection!", "Error");
      return "";
    }
  };
  return { ToggleSmsPreferencesData };
};

export default useToggleSmsPreferences;
