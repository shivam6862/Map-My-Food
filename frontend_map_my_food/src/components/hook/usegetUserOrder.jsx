import { useLocationLocalStorage } from "./LocationLocalStorage";

const usegetUserOrder = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const userid = fetchPersonalDetails().data.id;
  const userOrderData = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/userorder/${userid}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return {};
      });
    return data.response;
  };
  return { userOrderData };
};

export default usegetUserOrder;
