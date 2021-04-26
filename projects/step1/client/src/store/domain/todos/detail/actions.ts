import * as Types from "./types";
import * as Entity from "../../../../application/domain/todos/entity";

export type Actions = ReturnType<typeof fetch>;

export const fetch = (payload: { todo?: Entity.Todo | null }) => ({
  type: Types.FETCH,
  payload,
});
