import { useLocationLocalStorage } from "./LocationLocalStorage";
import { useNotification } from "./useNotification";

const useUserOrder = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const { NotificationHandler } = useNotification();
  const userOrderData = async (
    cartItems,
    totalAmount,
    deliveryCost,
    GST,
    address
  ) => {
    const userid = fetchPersonalDetails().data.id;
    const data = {
      order: cartItems,
      totalAmount: totalAmount,
      deliveryCost: deliveryCost,
      GST: GST,
      address: address,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/userorder/${userid}`,
        {
          method: "post",
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
      return "";
    }
  };
  return { userOrderData };
};

export default useUserOrder;
