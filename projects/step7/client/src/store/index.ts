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

/**
 * Override type AsyncThunkConfig of ReduxToolkit
 * @see https://github.com/reduxjs/redux-toolkit/blob/de1282c1ec7eb8db1590a60c55f0ec21004b8675/src/createAsyncThunk.ts#L65-L70
 */
export type AsyncThunkConfig<RejectValue = unknown> = {
  dispatch: ReturnType<typeof createStore>["dispatch"];
  extra: typeof Middleware.extraArgument;
  rejectValue: RejectValue;
  state: RootState;
};
