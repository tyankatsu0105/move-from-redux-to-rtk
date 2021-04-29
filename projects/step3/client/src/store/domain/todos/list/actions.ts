import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Types from "./types";
import * as Entity from "../../../../application/domain/todos/entity";

export const fetch = ReduxToolkit.createAction<{
  todos?: Entity.Todo[] | null;
}>("asdfsdf" as const);
export const create = ReduxToolkit.createAction<{
  createTodo: { todo?: Entity.Todo | null };
} | null>(Types.CREATE);
export const update = ReduxToolkit.createAction<{
  updateTodo: {
    todo?: Pick<Entity.Todo, "updatedAt" | "isDone" | "id"> | null;
  };
} | null>(Types.UPDATE);
export const remove = ReduxToolkit.createAction<{
  removeTodo: {
    todo?: Pick<Entity.Todo, "id"> | null;
  };
} | null>(Types.REMOVE);
