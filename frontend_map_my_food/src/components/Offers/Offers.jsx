import React from "react";
import { useLocation } from "react-router-dom";
import PaymentOffers from "./PaymentOffers/PaymentOffers";
import RestaurantOffers from "./RestaurantOffers/RestaurantOffers";

const Offers = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="container_offers">
      {pathname == "/offers/restaurant" && <RestaurantOffers />}
      {pathname == "/offers/payment" && <PaymentOffers />}
    </div>
  );
};

export default Offers;
