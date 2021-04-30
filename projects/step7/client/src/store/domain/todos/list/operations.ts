import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "../../../index";
import * as Actions from "./actions";
import * as Types from "./types";
import * as GraphQLTypes from "../../../../application/types/gen/api";

import * as Entity from "../../../../application/domain/todos/entity";

export const fetch = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  Types.FETCH,
  async (_, thunkAPI) => {
    try {
      const { data } = await thunkAPI.extra.api.query<
        GraphQLTypes.TodosQuery,
        GraphQLTypes.TodosQueryVariables
      >({
        query: GraphQLTypes.TodosDocument,
      });

      thunkAPI.dispatch(Actions.fetch(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const create = createAsyncThunk<
  void,
  { description: Entity.Todo["description"] },
  AsyncThunkConfig
>(Types.CREATE, async (args, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.mutate<
      GraphQLTypes.CreateTodoMutation,
      GraphQLTypes.CreateTodoMutationVariables
    >({
      mutation: GraphQLTypes.CreateTodoDocument,
      variables: { input: { description: args.description } },
    });

    if (data) thunkAPI.dispatch(Actions.create(data));
  } catch (error) {
    console.error(error);
  }
});

export const update = createAsyncThunk<
  void,
  { id: Entity.Todo["id"]; isDone: Entity.Todo["isDone"] },
  AsyncThunkConfig
>(Types.UPDATE, async (args, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.mutate<
      GraphQLTypes.UpdateTodoMutation,
      GraphQLTypes.UpdateTodoMutationVariables
    >({
      mutation: GraphQLTypes.UpdateTodoDocument,
      variables: { input: { id: args.id, isDone: args.isDone } },
    });

    if (data) thunkAPI.dispatch(Actions.update(data));
  } catch (error) {
    console.error(error);
  }
});

export const remove = createAsyncThunk<
  void,
  { id: Entity.Todo["id"] },
  AsyncThunkConfig
>(Types.REMOVE, async (args, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.mutate<
      GraphQLTypes.RemoveTodoMutation,
      GraphQLTypes.RemoveTodoMutationVariables
    >({
      mutation: GraphQLTypes.RemoveTodoDocument,
      variables: { input: { id: args.id } },
    });

    if (data) thunkAPI.dispatch(Actions.remove(data));
  } catch (error) {
    console.error(error);
  }
});
