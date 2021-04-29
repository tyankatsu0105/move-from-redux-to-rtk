import * as Redux from "redux";

import * as Detail from "./detail";
import * as List from "./list";

export type State = {
  [Detail.featureKey]: Detail.State;
  [List.featureKey]: List.State;
};

export const reducer = Redux.combineReducers<State>({
  [Detail.featureKey]: Detail.reducer,
  [List.featureKey]: List.reducer,
});
