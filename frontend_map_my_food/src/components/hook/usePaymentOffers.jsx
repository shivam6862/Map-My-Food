import PaymentOffersData from "../TemporaryData/PaymentOffers.json";

const usePaymentOffers = () => {
  const data = async (pincode) => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/offers/${pincode}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return PaymentOffersData;
      });
    return data;
  };
  return { data };
};

export default usePaymentOffers;
