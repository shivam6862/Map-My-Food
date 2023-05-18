import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Restaurants from "./components/restaurants/Restaurants";
import PaymentOffers from "./components/Offers/PaymentOffers/PaymentOffers";
import RestaurantOffers from "./components/Offers/RestaurantOffers/RestaurantOffers";
import FAQ from "./components/Support/FAQ/FAQ";
import Legal from "./components/Support/Legal/Legal";
import Partner from "./components/Support/Partner/Partner";

const routes = [
  { path: "/", Component: Home },
  { path: "/restaurants", Component: Restaurants },
  { path: "/offers/payment", Component: PaymentOffers },
  { path: "/offers/restaurant", Component: RestaurantOffers },
  { path: "/supports", Component: Partner },
  { path: "/support/issues/faq", Component: FAQ },
  { path: "/support/issues/legal", Component: Legal },
  { path: "/support/issues/partner-onboarding", Component: Partner },
];

export const AllRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<route.Component />}
      ></Route>
    ))}
  </Routes>
);
