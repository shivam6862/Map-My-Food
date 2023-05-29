import React from "react";
import classes from "./PaymentOffersMore.module.css";

const PaymentOffersMore = ({
  data,
  setIsMore,
  setIsCopy,
  isCopy,
  dataIndex,
}) => {
  return (
    <div className={classes.container}>
      <div
        className={classes.backdrop}
        onClick={() => {
          setIsMore(false);
        }}
      ></div>
      <div className={classes.data}>
        <div className={classes.part1}>
          <div className={classes.image}>
            <img src={data.couponLogo} alt="" />
          </div>
          <div className={classes.company}>
            <h1>{data.company}</h1>
          </div>
        </div>
        <div className={classes.part2}>
          <h1>{data.heading}</h1>
          <p>{data.para}</p>
        </div>
        <div className={classes.part3}>
          <div className={classes.term}>Terms and Conditions</div>
          <div className={classes.term_condition}>
            <ul>
              {Object.entries(data.term).map(([key, value]) => (
                <div key={key}>
                  <li>{value}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className={classes.part4} onClick={() => setIsCopy(dataIndex)}>
          {isCopy == dataIndex ? "COPIED" : "COPY CODE"}
        </div>
      </div>
    </div>
  );
};

export default PaymentOffersMore;
