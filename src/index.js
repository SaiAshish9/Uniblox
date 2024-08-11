import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "global/styles";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
