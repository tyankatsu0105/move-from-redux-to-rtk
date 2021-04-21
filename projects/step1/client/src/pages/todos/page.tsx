import * as React from "react";
import * as ReactRedux from "react-redux";
import * as ReactHookForm from "react-hook-form";

import * as StoreTodos from "../../store/domain/todos";
import * as Todo from "../../designs/recipies/Todo";

import * as Entity from "../../application/domain/todos/entity";
import * as Presenter from "../../application/domain/todos/presenter";

// ------------------------------------
// Component
// ------------------------------------

const Component = () => {
  const dispatch = ReactRedux.useDispatch();
  const todos = ReactRedux.useSelector(StoreTodos.dataSelector);
  const initialFormValues = ReactRedux.useSelector(
    StoreTodos.initialFormValuesSelector
  );

  const createFormHandler = ReactHookForm.useForm<Presenter.CreteInputValues>();
  const editFormHandler = ReactHookForm.useForm<Presenter.EditInputArray>({
    defaultValues: {
      todos: initialFormValues,
    },
  });

  const editFormsHandler = ReactHookForm.useFieldArray({
    name: "todos",
    control: editFormHandler.control,
    keyName: "todoID",
  });

  const onCreate: ReactHookForm.SubmitHandler<Presenter.CreteInputValues> = React.useCallback(
    (values) => {
      editFormsHandler.append({
        isDone: false,
      });
      dispatch(
        StoreTodos.create({
          description: values.description,
          createdAt: new Date(),
        })
      );
    },
    [dispatch, editFormsHandler]
  );

  const create = createFormHandler.handleSubmit(onCreate);
  const remove = (values: { id: Entity.Todo["id"]; index: number }) => {
    editFormsHandler.remove(values.index);
    dispatch(
      StoreTodos.remove({
        id: values.id,
      })
    );
  };

  const update = React.useCallback(
    (values: { id: Entity.Todo["id"]; isDone: Entity.Todo["isDone"] }) => {
      dispatch(
        StoreTodos.update({
          updatedAt: new Date(),
          isDone: values.isDone,
          id: values.id,
        })
      );
    },
    [dispatch]
  );

  return (
    <Todo.Component
      todos={todos}
      create={create}
      update={update}
      remove={remove}
      form={{ createFormHandler, editFormHandler }}
    />
  );
};

export default Component;
