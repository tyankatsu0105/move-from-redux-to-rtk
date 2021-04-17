import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";

import "minireset.css";

import * as App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ReactRouterDOM.BrowserRouter>
      <App.Component />
    </ReactRouterDOM.BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
