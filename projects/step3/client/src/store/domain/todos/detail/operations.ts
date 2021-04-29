import { ThunkAction } from "../../../index";
import * as Actions from "./actions";
import * as GraphQLTypes from "../../../../application/types/gen/api";

import * as Entity from "../../../../application/domain/todos/entity";

export const fetch = (params: {
  id: Entity.Todo["id"];
}): ThunkAction<void> => async (dispatch, _, extraArgument) => {
  try {
    const { data } = await extraArgument.api.query<
      GraphQLTypes.TodoQuery,
      GraphQLTypes.TodoQueryVariables
    >({
      query: GraphQLTypes.TodoDocument,
      variables: { id: params.id },
    });

    dispatch(Actions.fetch(data));
  } catch (error) {
    console.error(error);
  }
};
