import { ApolloLink } from "@apollo/client";
import { onError } from "@apollo/link-error";

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));

  return forward(operation);
});

// @see https://www.apollographql.com/docs/link/links/error/#callback
const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    console.error(graphQLErrors);
  }

  if (networkError) {
  }
});

export const link = ApolloLink.from([authMiddleware, errorLink]);
