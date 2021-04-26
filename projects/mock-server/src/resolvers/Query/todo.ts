import * as Mocks from "../../mocks";
import * as GraphQLTypes from "../../types/gen/api";

export const resolver: GraphQLTypes.QueryResolvers["todo"] = (_, args) => {
  const target = Mocks.todos.find((todo) => todo.id === args.id);
  if (!target) throw new Error("not found");

  return target;
};
