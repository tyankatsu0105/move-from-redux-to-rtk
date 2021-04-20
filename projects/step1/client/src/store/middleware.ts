import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { v4 as uuidv4 } from "uuid";

export const thunkExtraArgument = {
  uuid: uuidv4,
};

export const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(ReduxThunk.withExtraArgument(thunkExtraArgument))
);
