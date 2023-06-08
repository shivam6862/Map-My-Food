import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ islogIn, Component }) => {
  if (islogIn == null || islogIn == undefined) {
    return <Navigate to="/" />;
  }
  return <Component />;
};
export default PrivateRoute;
