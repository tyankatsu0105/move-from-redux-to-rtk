import * as Types from "./types";
import * as Entity from "../../../../application/domain/todos/entity";

export type Actions =
  | ReturnType<typeof fetch>
  | ReturnType<typeof create>
  | ReturnType<typeof update>
  | ReturnType<typeof remove>;

export const fetch = (payload: { todos?: Entity.Todo[] | null }) => ({
  type: Types.FETCH,
  payload,
});

export const create = (
  payload?: { createTodo: { todo?: Entity.Todo | null } } | null
) => ({
  type: Types.CREATE,
  payload,
});

export const update = (
  payload?: {
    updateTodo: {
      todo?: Pick<Entity.Todo, "updatedAt" | "isDone" | "id"> | null;
    };
  } | null
) => ({
  type: Types.UPDATE,
  payload,
});

export const remove = (
  payload?: {
    removeTodo: {
      todo?: Pick<Entity.Todo, "id"> | null;
    };
  } | null
) => ({
  type: Types.REMOVE,
  payload,
});
