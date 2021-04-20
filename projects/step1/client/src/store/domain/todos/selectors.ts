import { createSelector } from "reselect";

import { RootState } from "../../index";

const featureState = (state: RootState) => state.domain.todos;

export const dataSelector = createSelector(featureState, (state) => state.data);

export const initialFormValuesSelector = createSelector(dataSelector, (data) =>
  data.map((item) => ({ isDone: item.isDone }))
);
