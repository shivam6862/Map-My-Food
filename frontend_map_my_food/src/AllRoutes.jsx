import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Offers from "./components/Offers/Offers";
import Support from "./components/Support/Support";
import Cart from "./components/Cart/Cart";
import Search from "./components/Search/Search";
import SearchRestaurants from "./components/Search/SearchRestaurants/SearchRestaurants";
import User from "./components/User/User";
import NewRestaurant from "./components/NewRestaurant/NewRestaurant";
import PrivateRoute from "./PrivateRoutes";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const routes = [
  { path: "/", Component: HomePage, exact: true },
  { path: "/offers/:page", Component: Offers },
  { path: "/supports", Component: Support },
  { path: "/support/issues/:page", Component: Support },
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
