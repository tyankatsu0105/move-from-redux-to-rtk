import * as React from "react";
import * as Entity from "../../application/domain/todos/entity";
import * as Presenter from "../../application/domain/todos/presenter";

import * as ReactHookForm from "react-hook-form";

import * as TodoItem from "../components/TodoItem";
import * as TodoCreate from "../components/TodoCreate";

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  todos: Entity.Todo[];
  create: () => void;
  update: (values: {
    id: Entity.Todo["id"];
    isDone: Entity.Todo["isDone"];
  }) => void;
  remove: (values: { id: Entity.Todo["id"]; index: number }) => void;
  form: {
    createFormHandler: ReactHookForm.UseFormReturn<Presenter.CreteInputValues>;
    editFormHandler: ReactHookForm.UseFormReturn<Presenter.EditInputArray>;
  };
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => {
  return (
    <>
      <TodoCreate.Component
        create={props.create}
        formHandler={props.form.createFormHandler}
      />
      {props.todos.map((todo, index) => (
        <TodoItem.Component
          key={todo.id}
          index={index}
          todo={todo}
          update={props.update}
          remove={props.remove}
          form={{
            editFormHandler: props.form.editFormHandler,
          }}
        />
      ))}
    </>
  );
};
