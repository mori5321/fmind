import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import "styles/globals/normalize.css";
import "styles/globals/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
