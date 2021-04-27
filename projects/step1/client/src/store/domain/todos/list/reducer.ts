import produce from "immer";

import * as DTO from "./dto";

import * as Types from "./types";
import * as Status from "../../../status";
import { Actions } from "./actions";

import * as Entity from "../../../../application/domain/todos/entity";

export type State = {
  status: Status.Status;
  entities: Entity.TodoEntities;
};

const initialState: State = {
  status: Status.status.PRISTINE,
  entities: {},
};

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case Types.FETCH:
      return produce(state, (draft) => {
        if (action.payload.todos == null) return;

        draft.status = Status.status.SUBMITTING;

        draft.entities = DTO.Fetch.toEntity(action.payload);

        draft.status = Status.status.SUCCESS;
      });
    case Types.CREATE:
      return produce(state, (draft) => {
        const payload = DTO.Create.toEntity(action.payload);
        if (payload == null) return;

        draft.status = Status.status.SUBMITTING;

        draft.entities[payload.id] = payload;

        draft.status = Status.status.SUCCESS;
      });
    case Types.UPDATE:
      return produce(state, (draft) => {
        const payload = DTO.Update.toEntity(action.payload);
        if (payload == null) return;

        draft.status = Status.status.SUBMITTING;

        draft.entities[payload.id] = {
          ...draft.entities[payload.id],
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

        delete draft.entities[payload.id];

        draft.status = Status.status.SUCCESS;
      });

    default:
      return initialState;
  }
};
