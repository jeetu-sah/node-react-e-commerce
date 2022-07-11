import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";

//custom theme assets load
import "./admin_webu/custom_css/custom.css";

//load Api routes file.
import APIs from './api/api.json';
import reportWebVitals from "./reportWebVitals";
//import store from "./app/store";
import store from "./app/store";
console.log("store", store);

window.$axios = axios;
window.$base_url = process.env.REACT_APP_API_URL;
window.$api = APIs;


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
