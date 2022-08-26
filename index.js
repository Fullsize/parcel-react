/*
 * @Date: 2022-08-25 10:26:54
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-26 09:49:38
 * @FilePath: /parceljs-react/index.js
 * @Author: Fullsize
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./src/app";
import { HashRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("app")
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);