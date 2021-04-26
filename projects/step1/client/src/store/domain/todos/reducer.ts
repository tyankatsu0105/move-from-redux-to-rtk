import produce from "immer";

import * as DTO from "./dto";

import * as Types from "./types";
import * as Status from "../../status";
import { Actions } from "./actions";

import * as Entity from "../../../application/domain/todos/entity";

export type State = {
  status: Status.Status;
  data: Entity.Todo[];
};

const initialState: State = {
  status: Status.status.PRISTINE,
  data: [],
};

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case Types.FETCH:
      return produce(state, (draft) => {
        if (action.payload.todos == null) return;

        draft.status = Status.status.SUBMITTING;

        draft.data = DTO.Fetch.toEntity(action.payload);

        draft.status = Status.status.SUCCESS;
      });
    case Types.CREATE:
      return produce(state, (draft) => {
        const payload = DTO.Create.toEntity(action.payload);
        if (payload == null) return;

        draft.status = Status.status.SUBMITTING;

        draft.data = [...draft.data, payload];

        draft.status = Status.status.SUCCESS;
      });
    case Types.UPDATE:
      return produce(state, (draft) => {
        const payload = DTO.Update.toEntity(action.payload);
        if (payload == null) return;

        draft.status = Status.status.SUBMITTING;

        const index = draft.data.findIndex((todo) => todo.id === payload.id);

        draft.data[index] = {
          ...draft.data[index],
          isDone: payload.isDone,
          updatedAt: payload.updatedAt,
        };

        draft.status = Status.status.SUCCESS;
      });
    case Types.REMOVE:
      return produce(state, (draft) => {
        const payload = DTO.Remove.toEntity(action.payload);
        if (payload == null) return;

        draft.status = Status.status.SUBMITTING;

        draft.data = draft.data.filter((v) => v.id !== payload.id);

        draft.status = Status.status.SUCCESS;
      });

    default:
      return initialState;
  }
};
