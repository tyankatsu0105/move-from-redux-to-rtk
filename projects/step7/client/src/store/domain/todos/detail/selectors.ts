import * as ReduxToolkit from "@reduxjs/toolkit";

import { RootState } from "../../../index";

const featureState = (state: RootState) => state.domain.todos.detail;

export const todoSelector = ReduxToolkit.createSelector(
  featureState,
  (state) => ({
    id: state.id,
    description: state.description,
    isDone: state.isDone,
    createdAt: state.createdAt,
    updatedAt: state.updatedAt,
  })
);
