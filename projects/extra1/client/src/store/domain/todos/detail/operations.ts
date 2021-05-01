import { ApolloError } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "../../../index";
import * as Types from "./types";
import * as GraphQLTypes from "../../../../application/types/gen/api";

import * as Entity from "../../../../application/domain/todos/entity";

export const fetch = createAsyncThunk<
  GraphQLTypes.TodoQuery,
  { id: Entity.Todo["id"] },
  AsyncThunkConfig<ApolloError>
>(Types.FETCH, async (args, thunkAPI) => {
  const { data, error } = await thunkAPI.extra.api.query<
    GraphQLTypes.TodoQuery,
    GraphQLTypes.TodoQueryVariables
  >({
    query: GraphQLTypes.TodoDocument,
    variables: { id: args.id },
  });

  if (error) return thunkAPI.rejectWithValue(error);

  return data;
});
