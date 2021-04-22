import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";
import * as ReactRedux from "react-redux";

import * as ApolloClient from "@apollo/client";

import * as Modules from "./modules";

import "minireset.css";

import { createStore } from "./store";
import * as App from "./App";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <ApolloClient.ApolloProvider client={Modules.Apollo.client}>
      <ReactRedux.Provider store={store}>
        <ReactRouterDOM.BrowserRouter>
          <App.Component />
        </ReactRouterDOM.BrowserRouter>
      </ReactRedux.Provider>
    </ApolloClient.ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
