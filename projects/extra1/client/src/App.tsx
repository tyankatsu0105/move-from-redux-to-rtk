import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";

import * as Home from "./pages/home";
import * as Todos from "./pages/todos";
import * as Todo from "./pages/todo";

import { URI } from "./shared/modules/routes";

export const Component = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <ReactRouterDOM.Switch>
      <ReactRouterDOM.Route component={Todo.Component} path={URI.todo} />
      <ReactRouterDOM.Route component={Todos.Component} path={URI.todos} />
      <ReactRouterDOM.Route component={Home.Component} path={URI.home} />
    </ReactRouterDOM.Switch>
  </React.Suspense>
);
