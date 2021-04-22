import Faker from "faker";
import * as GraphQLTypes from "../types/gen/api";

const todo = (): GraphQLTypes.Todo => ({
  __typename: "Todo",
  id: Faker.random.uuid(),
  createdAt: Faker.date.past(2).toISOString(),
  updatedAt: Faker.date.past(1).toISOString(),
  description: Faker.name.title(),
  isDone: Faker.datatype.boolean(),
});

export const todos: GraphQLTypes.Todo[] = Array.from(new Array(5)).map(() =>
  todo()
);
