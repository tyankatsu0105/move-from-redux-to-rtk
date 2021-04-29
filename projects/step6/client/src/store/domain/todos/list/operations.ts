import { ThunkAction } from "../../../index";
import * as Actions from "./actions";
import * as GraphQLTypes from "../../../../application/types/gen/api";

import * as Entity from "../../../../application/domain/todos/entity";

export const fetch = (): ThunkAction<void> => async (
  dispatch,
  _,
  extraArgument
) => {
  try {
    const { data } = await extraArgument.api.query<
      GraphQLTypes.TodosQuery,
      GraphQLTypes.TodosQueryVariables
    >({
      query: GraphQLTypes.TodosDocument,
    });

    dispatch(Actions.fetch(data));
  } catch (error) {
    console.error(error);
  }
};

export const create = (params: {
  description: Entity.Todo["description"];
}): ThunkAction<void> => async (dispatch, _, extraArgument) => {
  try {
    const { data } = await extraArgument.api.mutate<
      GraphQLTypes.CreateTodoMutation,
      GraphQLTypes.CreateTodoMutationVariables
    >({
      mutation: GraphQLTypes.CreateTodoDocument,
      variables: { input: { description: params.description } },
    });

    if (data) dispatch(Actions.create(data));
  } catch (error) {
    console.error(error);
  }
};

export const update = (params: {
  id: Entity.Todo["id"];
  isDone: Entity.Todo["isDone"];
}): ThunkAction<void> => async (dispatch, _, extraArgument) => {
  try {
    const { data } = await extraArgument.api.mutate<
      GraphQLTypes.UpdateTodoMutation,
      GraphQLTypes.UpdateTodoMutationVariables
    >({
      mutation: GraphQLTypes.UpdateTodoDocument,
      variables: { input: { id: params.id, isDone: params.isDone } },
    });

    if (data) dispatch(Actions.update(data));
  } catch (error) {
    console.error(error);
  }
};

export const remove = (params: {
  id: Entity.Todo["id"];
}): ThunkAction<void> => async (dispatch, _, extraArgument) => {
  try {
    const { data } = await extraArgument.api.mutate<
      GraphQLTypes.RemoveTodoMutation,
      GraphQLTypes.RemoveTodoMutationVariables
    >({
      mutation: GraphQLTypes.RemoveTodoDocument,
      variables: { input: { id: params.id } },
    });

    if (data) dispatch(Actions.remove(data));
  } catch (error) {
    console.error(error);
  }
};
