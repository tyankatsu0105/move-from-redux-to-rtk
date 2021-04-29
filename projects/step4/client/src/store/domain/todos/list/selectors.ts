import * as ReduxToolkit from "@reduxjs/toolkit";

import { RootState } from "../../../index";

const featureState = (state: RootState) => state.domain.todos.list;

export const listEntitiesSelector = ReduxToolkit.createSelector(featureState, (state) =>
  Object.values(state.entities)
);

export const initialFormValuesSelector = ReduxToolkit.createSelector(
  listEntitiesSelector,
  (data) => data.map((item) => ({ isDone: item.isDone }))
);
