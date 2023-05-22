import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthenticationContextProvider } from "./components/store/authentication/Authentication-context.jsx";
import { NotificationContextProvider } from "./components/store/Notification/Notification-context.jsx";
import { CartContextProvider } from "./components/store/cart/Cart-context.jsx";
import { LocationContextProvider } from "./components/store/location/Location-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NotificationContextProvider>
      <LocationContextProvider>
        <CartContextProvider>
          <AuthenticationContextProvider>
            <App />
          </AuthenticationContextProvider>
        </CartContextProvider>
      </LocationContextProvider>
    </NotificationContextProvider>
  </BrowserRouter>
);
