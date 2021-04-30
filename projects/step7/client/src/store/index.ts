import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Middleware from "./middleware";
import * as Reducer from "./reducer";

export const createStore = () => {
  const { reducer } = Reducer.createReducer();
  const { middleware } = Middleware.createMiddleware();

  return ReduxToolkit.configureStore({
    middleware,
    reducer,
  });
};

// ==================================================
// types
// ==================================================

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;

export type ThunkAction<R> = (
  dispatch: ReturnType<typeof createStore>["dispatch"],
  getState: ReturnType<typeof createStore>["getState"],
  extraArgument: typeof Middleware.extraArgument
) => R;
