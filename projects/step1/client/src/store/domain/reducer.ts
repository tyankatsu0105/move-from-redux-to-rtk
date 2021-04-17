import * as Redux from "redux";

import * as Todos from "./todos";

export type State = {
  [Todos.featureKey]: Todos.State;
};

export const reducer = Redux.combineReducers<State>({
  [Todos.featureKey]: Todos.reducer,
});
