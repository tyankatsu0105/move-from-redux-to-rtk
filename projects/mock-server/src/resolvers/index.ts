import * as GraphQLTypes from "../types/gen/api";

import * as Todos from "./Query/todos";
import * as Todo from "./Query/todo";

import * as CreateTodo from "./Mutation/createTodo";
import * as UpdateTodo from "./Mutation/updateTodo";
import * as RemoveTodo from "./Mutation/removeTodo";

export const resolvers: GraphQLTypes.Resolvers = {
  Query: {
    todos: Todos.resolver,
    todo: Todo.resolver,
  },
  Mutation: {
    createTodo: CreateTodo.resolver,
    updateTodo: UpdateTodo.resolver,
    removeTodo: RemoveTodo.resolver,
  },
};
