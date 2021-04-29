import { createSelector } from "reselect";

import { RootState } from "../../../index";

const featureState = (state: RootState) => state.domain.todos.detail;

export const todoSelector = createSelector(featureState, (state) => ({
  id: state.id,
  description: state.description,
  isDone: state.isDone,
  createdAt: state.createdAt,
  updatedAt: state.updatedAt,
}));
