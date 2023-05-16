import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthenticationContextProvider } from "./components/store/authentication/Authentication-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </BrowserRouter>
);
