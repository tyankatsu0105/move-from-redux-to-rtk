import * as Entity from "./entity";

export type CreteInputValues = {
  description: Entity.Todo["description"];
};

export type EditInputValues = {
  isDone: Entity.Todo["isDone"];
};

export type EditInputArray = {
  todos: EditInputValues[];
};
