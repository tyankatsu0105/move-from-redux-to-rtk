import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({});
const client = new ApolloClient({
  cache: cache,
  uri: "http://localhost:4000/graphql",
});

export const thunkExtraArgument = {
  api: {
    mutate: client.mutate,
    query: client.query,
  },
};

export const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(ReduxThunk.withExtraArgument(thunkExtraArgument))
);
