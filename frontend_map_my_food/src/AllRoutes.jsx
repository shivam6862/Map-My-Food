import React, { Component, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import PaymentOffers from "./components/Offers/PaymentOffers/PaymentOffers";
import RestaurantOffers from "./components/Offers/RestaurantOffers/RestaurantOffers";
import FAQ from "./components/Support/FAQ/FAQ";
import Legal from "./components/Support/Legal/Legal";
import Partner from "./components/Support/Partner/Partner";
import Cart from "./components/Cart/Cart";
import Search from "./components/Search/Search";
import SearchRestaurants from "./components/Search/SearchRestaurants/SearchRestaurants";

const routes = [
  { path: "/", Component: HomePage },
  { path: "/offers/payment", Component: PaymentOffers },
  { path: "/offers/restaurant", Component: RestaurantOffers },
  { path: "/supports", Component: Partner },
  { path: "/support/issues/faq", Component: FAQ },
  { path: "/support/issues/legal", Component: Legal },
  { path: "/support/issues/partner-onboarding", Component: Partner },
  { path: "/checkout", Component: Cart },
  { path: "/search", Component: Search },
  { path: "/restaurants/ifc", Component: SearchRestaurants },
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
