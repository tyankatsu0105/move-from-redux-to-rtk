import produce from "immer";

import * as DTO from "./dto";

import * as Types from "./types";
import * as Status from "../../../status";
import { Actions } from "./actions";

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

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case Types.FETCH:
      return produce(state, (draft) => {
        const payload = DTO.Fetch.toEntity(action.payload);
        if (payload == null) return;

        draft.status = Status.status.SUBMITTING;

        draft.id = payload.id;
        draft.description = payload.description;
        draft.isDone = payload.isDone;
        draft.createdAt = payload.createdAt;
        draft.updatedAt = payload.updatedAt;

        draft.status = Status.status.SUCCESS;
      });

    default:
      return initialState;
  }
};
