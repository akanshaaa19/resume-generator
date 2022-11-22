import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
