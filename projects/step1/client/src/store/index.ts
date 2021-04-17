import * as Redux from "redux";

import * as Middleware from "./middleware";
import * as Reducer from "./reducer";

export const createStore = () => {
  const { reducer } = Reducer.createReducer();

  return Redux.createStore(reducer, undefined, Middleware.middlewareEnhancer);
};

// ==================================================
// types
// ==================================================

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
