import { DateTime } from "../../../../application/valueObject/datetime";
import * as GraphQLTypes from "../../../../application/types/gen/api";
import * as Entity from "../../../../application/domain/todos/entity";

export class Fetch {
  public static toEntity(data: GraphQLTypes.TodoQuery): Entity.Todo | null {
    if (data.todo == null) return null;

    return {
      ...data.todo,
      createdAt: new DateTime(data.todo.createdAt).format("yyy/MM/dd HH:mm:ss"),
      updatedAt: new DateTime(data.todo.updatedAt).format("yyy/MM/dd HH:mm:ss"),
    };
  }
}
