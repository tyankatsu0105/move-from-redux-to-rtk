import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "../../../index";
import * as Actions from "./actions";
import * as Types from "./types";
import * as GraphQLTypes from "../../../../application/types/gen/api";

import * as Entity from "../../../../application/domain/todos/entity";

export const fetch = createAsyncThunk<
  void,
  { id: Entity.Todo["id"] },
  AsyncThunkConfig
>(Types.FETCH, async (args, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.query<
      GraphQLTypes.TodoQuery,
      GraphQLTypes.TodoQueryVariables
    >({
      query: GraphQLTypes.TodoDocument,
      variables: { id: args.id },
    });

    thunkAPI.dispatch(Actions.fetch(data));
  } catch (error) {
    console.error(error);
  }
});
