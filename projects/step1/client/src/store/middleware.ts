import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

export const middlewareEnhancer = applyMiddleware(thunkMiddleware);
