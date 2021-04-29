import * as ReduxToolkit from "@reduxjs/toolkit";

import * as DTO from "./dto";

import * as Status from "../../../status";
import * as Actions from "./actions";

import * as Entity from "../../../../application/domain/todos/entity";

export type State = {
  status: Status.Status;
  entities: Entity.TodoEntities;
};

const initialState: State = {
  status: Status.status.PRISTINE,
  entities: {},
};

export const reducer = ReduxToolkit.createReducer(initialState, (builder) => {
  builder.addCase(Actions.fetch, (state, action) => {
    if (action.payload.todos == null) return;

    state.status = Status.status.SUBMITTING;

    state.entities = DTO.Fetch.toEntity(action.payload);

    state.status = Status.status.SUCCESS;
  });
  builder.addCase(Actions.create, (state, action) => {
    const payload = DTO.Create.toEntity(action.payload);
    if (payload == null) return;

    state.status = Status.status.SUBMITTING;

    state.entities[payload.id] = payload;

    state.status = Status.status.SUCCESS;
  });
  builder.addCase(Actions.update, (state, action) => {
    const payload = DTO.Update.toEntity(action.payload);
    if (payload == null) return;

    state.status = Status.status.SUBMITTING;

    state.entities[payload.id] = {
      ...state.entities[payload.id],
      isDone: payload.isDone,
      updatedAt: payload.updatedAt,
    };

    state.status = Status.status.SUCCESS;
  });
  builder.addCase(Actions.remove, (state, action) => {
    const payload = DTO.Remove.toEntity(action.payload);
    if (payload == null) return;

    state.status = Status.status.SUBMITTING;

    delete state.entities[payload.id];

    state.status = Status.status.SUCCESS;
  });
});
