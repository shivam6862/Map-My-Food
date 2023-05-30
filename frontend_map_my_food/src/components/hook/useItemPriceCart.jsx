import DataItemPriceCart from "../TemporaryData/ItemPrice.json";

const useItemPriceCart = () => {
  const ItemPriceCartData = async (RestaurantId, itemId) => {
    const data = await fetch(
      `${
        import.meta.env.VITE_REACT_BACKEND_URL
      }/ItemPriceCart/${RestaurantId}/${itemId}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return DataItemPriceCart;
      });
    return data;
  };
  return { ItemPriceCartData };
};

export default useItemPriceCart;
