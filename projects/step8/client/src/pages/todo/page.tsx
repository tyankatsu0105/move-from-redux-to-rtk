import * as React from "react";
import * as ReactRedux from "react-redux";
import * as ReactRouterDOM from "react-router-dom";

import * as StoreTodosDetail from "../../store/domain/todos/detail";

// ------------------------------------
// Component
// ------------------------------------

const Component = () => {
  const dispatch = ReactRedux.useDispatch();
  const params = ReactRouterDOM.useParams<{ id: string }>();

  const todo = ReactRedux.useSelector(StoreTodosDetail.todoSelector);

  React.useEffect(() => {
    dispatch(StoreTodosDetail.fetch({ id: params.id }));
  }, [dispatch]);

  return (
    <ul>
      <li>id: {todo.id}</li>
      <li>description: {todo.description}</li>
      <li>isDone: {String(todo.isDone)}</li>
      <li>createdAt: {todo.createdAt}</li>
      <li>updatedAt: {todo.updatedAt}</li>
    </ul>
  );
};

export default Component;
