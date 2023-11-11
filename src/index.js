import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { myStore } from "./store/store";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  root
);
