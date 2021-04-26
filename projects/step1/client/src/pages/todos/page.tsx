import * as React from "react";
import * as ReactRedux from "react-redux";
import * as ReactHookForm from "react-hook-form";

import * as StoreTodosList from "../../store/domain/todos/list";
import * as Todo from "../../designs/recipies/Todo";

import * as Entity from "../../application/domain/todos/entity";
import * as Presenter from "../../application/domain/todos/presenter";

// ------------------------------------
// Component
// ------------------------------------

const Component = () => {
  const dispatch = ReactRedux.useDispatch();
  const todos = ReactRedux.useSelector(StoreTodosList.dataSelector);
  const initialFormValues = ReactRedux.useSelector(
    StoreTodosList.initialFormValuesSelector
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
        StoreTodosList.create({
          description: values.description,
        })
      );
    },
    [dispatch, editFormsHandler]
  );

  const create = createFormHandler.handleSubmit(onCreate);
  const remove = (values: { id: Entity.Todo["id"]; index: number }) => {
    editFormsHandler.remove(values.index);
    dispatch(
      StoreTodosList.remove({
        id: values.id,
      })
    );
  };

  const update = React.useCallback(
    (values: { id: Entity.Todo["id"]; isDone: Entity.Todo["isDone"] }) => {
      dispatch(
        StoreTodosList.update({
          isDone: values.isDone,
          id: values.id,
        })
      );
    },
    [dispatch]
  );

  React.useEffect(() => {
    dispatch(StoreTodosList.fetch());
  }, [dispatch]);

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
