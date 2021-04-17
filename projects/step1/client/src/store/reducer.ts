import * as Redux from "redux";

import * as Domain from "./domain";

export const createReducer = () => {
  const reducer = Redux.combineReducers({
    [Domain.featureKey]: Domain.reducer,
  });

  return { reducer };
};
