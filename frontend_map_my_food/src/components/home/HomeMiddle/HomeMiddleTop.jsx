import React from "react";
import classes from "./HomeMiddleTop.module.css";

const HomeMiddleTop = () => {
  const datas = [
    {
      image: "/swiggey/trackMyFood/noMinOrder.png",
      heading: "Live Order Tracking",
      para: "Know where your order is at all times, from the restaurant to your doorstep",
    },
    {
      image: "/swiggey/trackMyFood/liveOrder.png",
      heading: "No Minimum Order",
      para: "Order in for yourself or for the group, with no restrictions on order value",
    },
    {
      image: "/swiggey/trackMyFood/superFastDelivery.png",
      heading: "Lightning-Fast Delivery",
      para: "Experience Map my food's superfast delivery for food delivered fresh & on time",
    },
  ];
  return (
    <div className={classes.box}>
      <div className={classes.row}>
        {datas.map((data, index) => {
          return (
            <div className={classes.item} key={index}>
              <div className={classes.image}>
                <img src={data.image} alt="" />
              </div>
              <div className={classes.heading}>{data.heading}</div>
              <div className={classes.para}> {data.para}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeMiddleTop;
