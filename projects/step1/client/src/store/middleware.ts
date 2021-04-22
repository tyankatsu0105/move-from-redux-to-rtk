import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { ApolloClient, InMemoryCache } from "@apollo/client";

import { v4 as uuidv4 } from "uuid";

const cache = new InMemoryCache({});
const client = new ApolloClient({
  cache: cache,
  uri: "http://localhost:4000/graphql",
});

export const thunkExtraArgument = {
  uuid: uuidv4,
  api: {
    mutate: client.mutate,
    query: client.query,
  },
};

export const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(ReduxThunk.withExtraArgument(thunkExtraArgument))
);
