import { createSelector } from "reselect";

import { RootState } from "../../../index";

const featureState = (state: RootState) => state.domain.todos.list;

export const listEntitiesSelector = createSelector(featureState, (state) =>
  Object.values(state.entities)
);

export const initialFormValuesSelector = createSelector(
  listEntitiesSelector,
  (data) => data.map((item) => ({ isDone: item.isDone }))
);
