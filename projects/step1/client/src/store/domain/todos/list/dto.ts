import { DateTime } from "../../../../application/valueObject/datetime";
import * as GraphQLTypes from "../../../../application/types/gen/api";
import * as Entity from "../../../../application/domain/todos/entity";
import { normalize, schema } from "normalizr";

export class Fetch {
  public static toEntity(data: GraphQLTypes.TodosQuery): Entity.TodoEntities {
    if (data.todos == null) return {};

    const todo = new schema.Entity<Entity.Todo>("todos");
    const todos = new schema.Array(todo);

    const normalizedData = normalize<
      Entity.Todo,
      { todos: Entity.TodoEntities }
    >(data.todos, todos).entities.todos;

    return normalizedData;
  }
}

export class Create {
  public static toEntity(
    data?: GraphQLTypes.CreateTodoMutation | null
  ): Entity.Todo | null {
    if (data?.createTodo.todo == null) return null;

    return {
      ...data.createTodo.todo,
      createdAt: new DateTime(data.createTodo.todo.createdAt).format(
        "yyy/MM/dd HH:mm:ss"
      ),
      updatedAt: new DateTime(data.createTodo.todo.updatedAt).format(
        "yyy/MM/dd HH:mm:ss"
      ),
    };
  }
}

export class Update {
  public static toEntity(
    data?: GraphQLTypes.UpdateTodoMutation | null
  ): Pick<Entity.Todo, "updatedAt" | "isDone" | "id"> | null {
    if (data?.updateTodo.todo == null) return null;

    return {
      ...data.updateTodo.todo,
      updatedAt: new DateTime(data.updateTodo.todo.updatedAt).format(
        "yyy/MM/dd HH:mm:ss"
      ),
    };
  }
}

export class Remove {
  public static toEntity(
    data?: GraphQLTypes.RemoveTodoMutation | null
  ): Pick<Entity.Todo, "id"> | null {
    if (data?.removeTodo.todo == null) return null;

    return {
      ...data.removeTodo.todo,
    };
  }
}
