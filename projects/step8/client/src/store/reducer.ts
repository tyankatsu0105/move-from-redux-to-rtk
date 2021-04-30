import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Domain from "./domain";

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    [Domain.featureKey]: Domain.reducer,
  });

  return { reducer };
};
