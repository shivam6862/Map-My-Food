import { useLocationLocalStorage } from "./LocationLocalStorage";
import { useNotification } from "./useNotification";

const useGetUserAddresses = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const { NotificationHandler } = useNotification();
  const getUserAddressesData = async () => {
    const id = fetchPersonalDetails().data.id;
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/useraddresses/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
        const errorData = { response: [] };
        NotificationHandler("Check your connection!", "Error");
        return errorData;
      });
    return data.response;
  };
  return { getUserAddressesData };
};

export default useGetUserAddresses;
