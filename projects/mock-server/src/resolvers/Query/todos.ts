import * as Mocks from "../../mocks";
import * as GraphQLTypes from "../../types/gen/api";

export const resolver: GraphQLTypes.QueryResolvers["todos"] = () => {
  return Mocks.todos;
};
