import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Middleware from "./middleware";
import * as Reducer from "./reducer";

export const createStore = () => {
  const { reducer } = Reducer.createReducer();

  return ReduxToolkit.createStore(
    reducer,
    undefined,
    Middleware.middlewareEnhancer
  );
};

// ==================================================
// types
// ==================================================

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;

export type ThunkAction<R> = (
  dispatch: ReturnType<typeof createStore>["dispatch"],
  getState: ReturnType<typeof createStore>["getState"],
  extraArgument: typeof Middleware.thunkExtraArgument
) => R;
