import { useLocationLocalStorage } from "./LocationLocalStorage";

const useGetUserAddresses = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const getUserAddressesData = async () => {
    const id = fetchPersonalDetails().data.id;
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/useraddresses/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return "";
      });
    return data.response;
  };
  return { getUserAddressesData };
};

export default useGetUserAddresses;
