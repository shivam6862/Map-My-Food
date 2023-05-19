import React, { useState } from "react";
import classes from "./PlaceOrder.module.css";
import PlaceOrderData from "../../TemporaryData/Cart/PlaceOder.json";

const PlaceOrder = () => {
  const [order, setOrder] = useState(PlaceOrderData);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    if (isChecked) setIsChecked(false);
    else setIsChecked(true);
  };
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.top_part1}>
          <div className={classes.top_part1_left}>
            <img src={order.image} alt="" />
          </div>
          <div className={classes.top_part1_right}>
            <h1>{order.hotal}</h1>
            <p>{order.place}</p>
          </div>
        </div>
        <div className={classes.top_part2}>
          <div className={classes.top_part2_payment_slip}>
            {order.items.map((item, index) => (
              <div className={classes.item} key={item.id}>
                <div className={classes.item_logo}>
                  <img src="/swiggey/Logo/logo_2022.png" alt="" />
                </div>
                <div className={classes.item_name}>
                  <div className={classes.left_image_arrow}></div>
                  <h1>{item.name}</h1>
                  <p>Customize</p>
                </div>
                <div className={classes.item_quantity}>
                  <div className={classes.item_quantity_less}>-</div>
                  <div className={classes.item_quantity_number}>
                    {item.quantity}
                  </div>
                  <div className={classes.item_quantity_more}>+</div>
                </div>
                <div className={classes.item_cost}>{item.cost}</div>
              </div>
            ))}
          </div>
          <div className={classes.top_part2_suggestion}>
            <input
              type="text"
              placeholder="''Any Suggestions? We will pass it on..."
            />
          </div>
          <div className={classes.top_part2_contact}>
            <div className={classes.top_part2_contact_left}>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
            <div className={classes.top_part2_contact_right}>
              <h1>Opt in for No-contact Delivery</h1>
              <p>
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </p>
            </div>
          </div>
          <div className={classes.top_part2_bill_details}>
            <h1>Bill Details</h1>
            <div className={classes.top_part2_bill_details_h2}>
              <div className={classes.top_part2_bill_details_h2_a}>
                Item Total
              </div>
              <div className={classes.top_part2_bill_details_h2_b}>
                {order.total}
              </div>
            </div>
            <div className={classes.top_part2_bill_details_h3}>
              <div className={classes.top_part2_bill_details_h3_a}>
                Delivery partner fee
              </div>
              <div className={classes.top_part2_bill_details_h3_b}>
                {order.deliveryCost}
              </div>
            </div>
            <div className={classes.top_part2_bill_details_h4}>
              <div className={classes.top_part2_bill_details_h4_a}>
                GST and Restaurant Charges
              </div>
              <div className={classes.top_part2_bill_details_h4_b}>
                {order.GST}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.top_part3}>
          <div className={classes.top_part3_a}>TO PAY</div>
          <div className={classes.top_part3_b}>{order.PAY}</div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottom_box}>
          <h1>Review your order and address details to avoid cancellations</h1>
          <h4>
            <span>Note:</span>
            If you cancel within 60 seconds of placing your order, a 100% refund
            will be issued. No refund for cancellations made after 60 seconds.
          </h4>
          <h5>Avoid cancellation as it leads to food wastage.</h5>
          <h6>Read cancellation policy</h6>
        </div>
      </div>
    </div>
  );
};
export default PlaceOrder;
