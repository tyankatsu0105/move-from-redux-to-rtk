import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Todos from "./todos";

export type State = {
  [Todos.featureKey]: Todos.State;
};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Todos.featureKey]: Todos.reducer,
});
