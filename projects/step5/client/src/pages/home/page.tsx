import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";

import { URI } from "../../shared/modules/routes";

// ------------------------------------
// Component
// ------------------------------------

const Component = () => (
  <ReactRouterDOM.NavLink to={URI.todos}>todos</ReactRouterDOM.NavLink>
);

export default Component;
