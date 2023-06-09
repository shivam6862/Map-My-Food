import { useLocationLocalStorage } from "./LocationLocalStorage";
import { useNotification } from "./useNotification";

const useInsertUserAddresses = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const { NotificationHandler } = useNotification();
  const insertUserAddressesData = async (address, type) => {
    const id = fetchPersonalDetails().data.id;
    const data = { address: address };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/useraddresses/${id}`,
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
      NotificationHandler("Check your connection!", "Error");
      return [];
    }
  };
  return { insertUserAddressesData };
};

export default useInsertUserAddresses;
