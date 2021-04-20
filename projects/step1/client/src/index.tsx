import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";
import * as ReactRedux from "react-redux";

import "minireset.css";

import { createStore } from "./store";
import * as App from "./App";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={store}>
      <ReactRouterDOM.BrowserRouter>
        <App.Component />
      </ReactRouterDOM.BrowserRouter>
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);