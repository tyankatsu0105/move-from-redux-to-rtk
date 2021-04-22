import * as Mocks from "../../mocks";
import * as GraphQLTypes from "../../types/gen/api";

export const resolver: GraphQLTypes.MutationResolvers["updateTodo"] = (
  _,
  args
) => {
  const index = Mocks.todos.findIndex((todo) => todo.id === args.input.id);

  const result: GraphQLTypes.Todo = {
    ...Mocks.todos[index],
    isDone: args.input.isDone,
    updatedAt: new Date().toISOString(),
  };

  Mocks.todos.splice(index, 1, result);

  return {
    todo: result,
  };
};
