import * as Mocks from "../../mocks";
import * as GraphQLTypes from "../../types/gen/api";

export const resolver: GraphQLTypes.MutationResolvers["removeTodo"] = (
  _,
  args
) => {
  const index = Mocks.todos.findIndex((todo) => todo.id === args.input.id);

  const result = Mocks.todos[index];

  Mocks.todos.splice(index, 1);

  return {
    todo: result,
  };
};
