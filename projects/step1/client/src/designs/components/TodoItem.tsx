import * as React from "react";
import * as ReactHookForm from "react-hook-form";

import * as Presenter from "../../application/domain/todos/presenter";
import * as Entity from "../../application/domain/todos/entity";

import "./TodoItem.css";

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  todo: Entity.Todo;
  index: number;
  update: (values: {
    id: Entity.Todo["id"];
    isDone: Entity.Todo["isDone"];
  }) => void;
  remove: (values: { id: Entity.Todo["id"]; index: number }) => void;
  form: {
    editFormHandler: ReactHookForm.UseFormReturn<Presenter.EditInputArray>;
  };
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => {
  const handleUpdate = React.useCallback(() => {
    props.update({
      id: props.todo.id,
      isDone: !props.form.editFormHandler.getValues("todos")[props.index]
        .isDone,
    });
  }, [props]);
  return (
    <div className="TodoItem">
      <p className="TodoItem-Description">{props.todo.description}</p>
      <div className="TodoItem-isDone">
        <label htmlFor={`isDone-${props.index}`}>
          Done
          <input
            {...props.form.editFormHandler.register(
              `todos.${props.index}.isDone` as const
            )}
            type="checkbox"
            id={`isDone-${props.index}`}
            onClick={handleUpdate}
          />
        </label>
      </div>

      <div className="TodoItem-Dates">
        <p>createdAt{props.todo.createdAt}</p>
        <p>updatedAt{props.todo.updatedAt}</p>
      </div>

      <button
        type="button"
        onClick={() => props.remove({ id: props.todo.id, index: props.index })}
      >
        Remove
      </button>
    </div>
  );
};
