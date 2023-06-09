import { useNotification } from "./useNotification";
import { useLocationLocalStorage } from "./LocationLocalStorage";

const useAuth = () => {
  const { NotificationHandler } = useNotification();
  const { updatePersonalDetails } = useLocationLocalStorage();
  const Auth = async (data, type) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/${type}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responsedata = await response.json();
      NotificationHandler(responsedata.message, "Info");
      if (responsedata.navigate == "true" && type == "verify") {
        updatePersonalDetails(responsedata);
      }
      return responsedata.navigate;
    } catch (err) {
      console.log(err);
      NotificationHandler("Check your connection!", "Error");
      return "false";
    }
  };
  return { Auth };
};

export default useAuth;
