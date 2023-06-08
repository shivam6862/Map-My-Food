import React from "react";
import { useState } from "react";
import useItemPriceCart from "../../hook/useItemPriceCart";
import { useNotification } from "../../hook/useNotification";

const CartContext = React.createContext({
  addItems: [],
  onAddItems: (itemId) => {},
  onRemoveItem: (itemId) => {},
  totalAmount: 0,
  deliveryCost: 0,
  GST: 0,
  hotal: "",
  place: "",
  image: "",
  RestaurantId: "",
  deliverHere: null,
  onDeliverHere: (address) => {},
});

export const CartContextProvider = (props) => {
  const { ItemPriceCartData } = useItemPriceCart();
  const [addItems, setAddItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [GST, setGST] = useState(0);
  const [hotal, setHotal] = useState("");
  const [place, setPlace] = useState("Dumka");
  const [image, setImage] = useState("/swiggey/AvailableRestaurants/5.webp");
  const [restaurantId, setRestaurantId] = useState(null);
  const [deliverHere, setDeliverHere] = useState(null);
  const { NotificationHandler } = useNotification();

  const AddItemsHandler = async (RestaurantId, itemId) => {
    const dataItemPriceCart = await ItemPriceCartData(RestaurantId, itemId);
    setRestaurantId(RestaurantId);
    setHotal(dataItemPriceCart[itemId]["hotal"]);
    const newItemPrice = +dataItemPriceCart[itemId]["price"];
    const updatedTotalAmount = totalAmount + newItemPrice;
    const existingCartItemIndex = addItems.findIndex(
      (item) => item.itemId === itemId
    );
    const existingCartItem = addItems[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      updatedItems = {
        itemId: existingCartItem.itemId,
        quantity: existingCartItem.quantity + 1,
        items: existingCartItem.items,
        amount: existingCartItem.amount + newItemPrice,
      };
    } else {
      updatedItems = {
        itemId: itemId,
        quantity: 1,
        items: dataItemPriceCart[itemId],
        amount: newItemPrice,
      };
    }
    if (restaurantId != null && RestaurantId != restaurantId) {
      setAddItems([updatedItems]);
      setTotalAmount(newItemPrice);
      setDeliveryCost(48 - newItemPrice * 0.01);
      setGST(newItemPrice * 0.02);
      NotificationHandler(
        "Your cart contains items from other restaurant.Your cart had reset for adding items from this restaurant?",
        "Info"
      );
      return;
    }
    var updatedItemsAll = [...addItems];
    if (existingCartItem)
      updatedItemsAll.splice(existingCartItemIndex, 1, updatedItems);
    else updatedItemsAll.push(updatedItems);
    setAddItems(updatedItemsAll);
    setTotalAmount(updatedTotalAmount);
    setDeliveryCost(48 - updatedTotalAmount * 0.01);
    setGST(updatedTotalAmount * 0.02);
  };

  const onRemoveHandler = async (RestaurantId, itemId) => {
    const dataItemPriceCart = await ItemPriceCartData(RestaurantId, itemId);
    const deleteItemPrice = +dataItemPriceCart[itemId]["price"];
    const updatedTotalAmount = totalAmount - deleteItemPrice;
    const existingCartItemIndex = addItems.findIndex(
      (item) => item.itemId === itemId
    );
    const existingItem = addItems[existingCartItemIndex];
    let updatedItems;
    if (existingItem.quantity == 1) {
      updatedItems = addItems.filter((item) => item.itemId !== itemId);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
        amount: existingItem.amount - deleteItemPrice,
      };
      updatedItems = [...addItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    setAddItems(updatedItems);
    setTotalAmount(updatedTotalAmount);
    setDeliveryCost(48 - updatedTotalAmount * 0.01);
    setGST(updatedTotalAmount * 0.02);
  };

  const onDeliverHereHandler = (address) => {
    setDeliverHere(address);
  };

  return (
    <CartContext.Provider
      value={{
        addItems: addItems,
        totalAmount: totalAmount,
        onAddItems: AddItemsHandler,
        onRemoveItem: onRemoveHandler,
        deliveryCost: deliveryCost,
        GST: GST,
        hotal: hotal,
        place: place,
        image: image,
        RestaurantId: restaurantId,
        deliverHere: deliverHere,
        onDeliverHere: onDeliverHereHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
