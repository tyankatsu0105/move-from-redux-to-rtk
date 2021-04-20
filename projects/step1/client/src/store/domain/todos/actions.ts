import * as Types from "./types";
import * as Entity from "../../../application/domain/todos/entity";

export type Actions =
  | ReturnType<typeof create>
  | ReturnType<typeof update>
  | ReturnType<typeof remove>;

export const create = (payload: {
  id: Entity.Todo["id"];
  description: Entity.Todo["description"];
  createdAt: Entity.Todo["createdAt"];
}) => ({
  type: Types.CREATE,
  payload,
});

export const update = (payload: {
  id: Entity.Todo["id"];
  isDone: Entity.Todo["isDone"];
  updatedAt: Entity.Todo["updatedAt"];
}) => ({
  type: Types.UPDATE,
  payload,
});

export const remove = (payload: { id: Entity.Todo["id"] }) => ({
  type: Types.REMOVE,
  payload,
});
