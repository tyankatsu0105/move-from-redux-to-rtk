import * as Entity from "./entity";

import faker from "faker";
faker.locale = "ja";

const todo = (): Entity.Todo => ({
  id: faker.datatype.uuid(),
  createdAt: faker.date.past(2).toISOString(),
  updatedAt: faker.date.past(2).toISOString(),
  description: faker.random.words(),
  isDone: faker.datatype.boolean(),
});

export const todos: Entity.Todo[] = Array.from(new Array(5)).map(() => todo());
