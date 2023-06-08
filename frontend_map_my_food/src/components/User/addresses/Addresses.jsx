import React, { useEffect, useState } from "react";
import classes from "./Addresses.module.css";
import SvgHome from "../../ui/User/SvgHome";
import useGetUserAddresses from "../../hook/useGetUserAddresses";
import useInsertUserAddresses from "../../hook/useInsertUserAddresses";

const Addresses = () => {
  const { getUserAddressesData } = useGetUserAddresses();
  const { insertUserAddressesData } = useInsertUserAddresses();
  const [address, setAddress] = useState([]);
  useEffect(() => {
    const callAddresss = async () => {
      const response = await getUserAddressesData();
      setAddress(response);
    };
    callAddresss();
  }, []);
  const deleted = async (data) => {
    const response = await insertUserAddressesData(data, "delete");
    setAddress(response);
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Manage Addresses</div>
      <div className={classes.boxes}>
        {address.map((data, index) => (
          <div className={classes.box} key={index}>
            <div className={classes.box_left}>
              <SvgHome />
            </div>
            <div className={classes.box_right}>
              <h1>Home</h1>
              <p>{data}</p>
              <div className={classes.right_buttons}>
                <button
                  onClick={() => {
                    deleted(data);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
