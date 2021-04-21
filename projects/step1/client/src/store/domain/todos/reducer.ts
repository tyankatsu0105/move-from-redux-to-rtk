import produce from "immer";
import { v4 as uuidv4 } from "uuid";

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
    case Types.CREATE:
      return produce(state, (draft) => {
        draft.status = Status.status.SUBMITTING;

        draft.data = [
          ...draft.data,
          {
            id: uuidv4(),
            createdAt: action.payload.createdAt,
            description: action.payload.description,
            isDone: false,
            updatedAt: action.payload.createdAt,
          },
        ];

        draft.status = Status.status.SUCCESS;
      });
    case Types.UPDATE:
      return produce(state, (draft) => {
        draft.status = Status.status.SUBMITTING;

        const target = draft.data.find((v) => v.id === action.payload.id);
        if (!target) return;

        target.isDone = action.payload.isDone;
        target.updatedAt = action.payload.updatedAt;

        draft.status = Status.status.SUCCESS;
      });
    case Types.REMOVE:
      return produce(state, (draft) => {
        draft.status = Status.status.SUBMITTING;

        draft.data = draft.data.filter((v) => v.id !== action.payload.id);

        draft.status = Status.status.SUCCESS;
      });

    default:
      return initialState;
  }
};
