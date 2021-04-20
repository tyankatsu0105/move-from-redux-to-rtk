import { format } from "date-fns";
import { ThunkAction } from "../../index";
import * as Actions from "./actions";

import * as Entity from "../../../application/domain/todos/entity";

export const create = (params: {
  description: Entity.Todo["description"];
  createdAt: Date;
}): ThunkAction<void> => (dispatch, _, extraArgument) => {
  const payload: Parameters<typeof Actions.create>[0] = {
    id: extraArgument.uuid(),
    description: params.description,
    createdAt: format(params.createdAt, "yyy/MM/dd HH:mm"),
  };

  dispatch(Actions.create(payload));
};

export const update = (params: {
  id: Entity.Todo["id"];
  isDone: Entity.Todo["isDone"];
  updatedAt: Date;
}): ThunkAction<void> => (dispatch) => {
  const payload: Parameters<typeof Actions.update>[0] = {
    id: params.id,
    isDone: params.isDone,
    updatedAt: format(params.updatedAt, "yyy/MM/dd HH:mm"),
  };

  dispatch(Actions.update(payload));
};
