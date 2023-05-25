import React from "react";
import { useState } from "react";
import ItemPrice from "../../TemporaryData/ItemPrice.json";

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
});

export const CartContextProvider = (props) => {
  const [addItems, setAddItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [GST, setGST] = useState(0);
  const [hotal, setHotal] = useState("");
  const [place, setPlace] = useState("Dumka");
  const [image, setImage] = useState("/swiggey/AvailableRestaurants/5.webp");

  const AddItemsHandler = (itemId) => {
    setHotal(ItemPrice[itemId]["hotal"]);
    const newItemPrice = ItemPrice[itemId]["price"];
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
        items: ItemPrice[itemId],
        amount: newItemPrice,
      };
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

  const onRemoveHandler = (itemId) => {
    const deleteItemPrice = ItemPrice[itemId]["price"];
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
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
