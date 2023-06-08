import React, { useEffect, useState, useContext } from "react";
import classes from "./AddressesCart.module.css";
import SvgHome from "../../ui/User/SvgHome";
import useGetUserAddresses from "../../hook/useGetUserAddresses";
import useInsertUserAddresses from "../../hook/useInsertUserAddresses";
import CartContext from "../../store/cart/Cart-context";

const AddressesCart = () => {
  const cartContextCtx = useContext(CartContext);
  const { getUserAddressesData } = useGetUserAddresses();
  const { insertUserAddressesData } = useInsertUserAddresses();
  const [address, setAddress] = useState([]);
  useEffect(() => {
    const callAddress = async () => {
      const response = await getUserAddressesData();
      setAddress(response);
    };
    callAddress();
  }, []);
  const [textareaValue, setTextareaValue] = useState("");
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const addNew = async () => {
    const response = await insertUserAddressesData(textareaValue, "post");
    setTextareaValue("");
    setAddress(response);
  };
  const deliverHere = (data) => {
    cartContextCtx.onDeliverHere(data);
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Select delivey address </div>
      {address.length > 0 && (
        <div className={classes.heading1}>
          You have a saved address in the location
        </div>
      )}
      <div className={classes.boxes}>
        {address.map((data, index) => (
          <div className={classes.box} key={index}>
            <div className={classes.box_left}>
              <SvgHome />
            </div>
            <div className={classes.box_right}>
              <h1>Home</h1>
              <p>{data}</p>
              <p>__ MIN</p>
              <div className={classes.right_buttons}>
                <button
                  onClick={() => {
                    deliverHere(data);
                  }}
                >
                  DELIVER HERE
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className={classes.boxTextarea}>
          <div className={classes.box_left}>
            <img src="/swiggey/location.png" alt="" />
          </div>
          <div className={classes.box_right}>
            <h1>Add New Address</h1>
            <textarea
              name="addNew"
              id="addNew"
              cols="25"
              rows="5"
              value={textareaValue}
              onChange={handleTextareaChange}
            ></textarea>
            <div className={classes.right_buttons} onClick={addNew}>
              <button>ADD NEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesCart;
