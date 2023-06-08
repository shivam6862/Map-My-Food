import React, { Component } from "react";
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
import User from "./components/User/User";
import NewRestaurant from "./components/NewRestaurant/NewRestaurant";
import PrivateRoute from "./PrivateRoutes";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const routes = [
  { path: "/", Component: HomePage, exact: true },
  { path: "/offers/payment", Component: PaymentOffers },
  { path: "/offers/restaurant", Component: RestaurantOffers },
  { path: "/supports", Component: Partner },
  { path: "/support/issues/faq", Component: FAQ },
  { path: "/support/issues/legal", Component: Legal },
  { path: "/support/issues/partner-onboarding", Component: Partner },
  { path: "/checkout", Component: Cart },
  { path: "/search", Component: Search },
  { path: "/search/:RestaurantId", Component: SearchRestaurants },
  { path: "/my-account/:page", Component: User, private: true },
  { path: "/new-restaurant", Component: NewRestaurant, private: true },
  { path: "*", Component: PageNotFound },
];

export const AllRoutes = ({ islogIn }) => (
  <Routes>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={
            route.private ? (
              <PrivateRoute islogIn={islogIn} Component={route.Component} />
            ) : (
              <route.Component />
            )
          }
        ></Route>
      );
    })}
  </Routes>
);
