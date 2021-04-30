import { ApolloClient, InMemoryCache } from "@apollo/client";
import * as ReduxToolkit from "@reduxjs/toolkit";

const cache = new InMemoryCache({});
const client = new ApolloClient({
  cache: cache,
  uri: "http://localhost:4000/graphql",
});

export const extraArgument = {
  api: {
    mutate: client.mutate,
    query: client.query,
  },
};

export const createMiddleware = () => {
  const middleware = ReduxToolkit.getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: {
      extraArgument,
    },
  });
  return { middleware };
};
