import Faker from "faker";

import * as Mocks from "../../mocks";
import * as GraphQLTypes from "../../types/gen/api";

export const resolver: GraphQLTypes.MutationResolvers["createTodo"] = (
  _,
  args
) => {
  const value: GraphQLTypes.Todo = {
    id: Faker.datatype.uuid(),
    description: args.input.description,
    isDone: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  Mocks.todos.push(value);

  return {
    todo: value,
  };
};
