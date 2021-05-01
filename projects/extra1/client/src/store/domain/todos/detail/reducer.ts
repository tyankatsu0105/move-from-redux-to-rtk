import * as ReduxToolkit from "@reduxjs/toolkit";

import * as DTO from "./dto";

import * as Status from "../../../status";
import * as Operations from "./operations";

import * as Entity from "../../../../application/domain/todos/entity";

export type State = {
  status: Status.Status;
  id: Entity.Todo["id"];
  description: Entity.Todo["description"];
  isDone: Entity.Todo["isDone"];
  createdAt: Entity.Todo["createdAt"];
  updatedAt: Entity.Todo["updatedAt"];
};

const initialState: State = {
  status: Status.status.PRISTINE,
  id: "",
  description: "",
  isDone: false,
  createdAt: "",
  updatedAt: "",
};
export const reducer = ReduxToolkit.createReducer(initialState, (builder) => {
  builder.addCase(Operations.fetch.pending, (state, action) => {
    state.status = Status.status.SUBMITTING;
  });
  builder.addCase(Operations.fetch.fulfilled, (state, action) => {
    state.status = Status.status.VALID;

    const payload = DTO.Fetch.toEntity(action.payload);
    if (payload == null) return;

    state.id = payload.id;
    state.description = payload.description;
    state.isDone = payload.isDone;
    state.createdAt = payload.createdAt;
    state.updatedAt = payload.updatedAt;

    state.status = Status.status.SUCCESS;
  });
  builder.addCase(Operations.fetch.rejected, (state, action) => {
    state.status = Status.status.INVALID;

    console.error("action.error", JSON.stringify(action.error));
    console.error("action.payload", JSON.stringify(action.payload));
  });
});
