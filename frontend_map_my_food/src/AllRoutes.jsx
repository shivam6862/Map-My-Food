import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Restaurants from "./components/restaurants/Restaurants";

const routes = [
  { path: "/", Component: Home },
  { path: "/restaurants", Component: Restaurants },
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
