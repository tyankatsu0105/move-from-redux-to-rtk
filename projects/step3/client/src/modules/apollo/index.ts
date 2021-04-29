import * as ApolloClient from '@apollo/client';

import { link } from './link';

const cache = new ApolloClient.InMemoryCache({ addTypename: false });

const defaultOptions: ApolloClient.DefaultOptions = {
  mutate: {
    errorPolicy: 'all',
  },
  query: {
    errorPolicy: 'all',
    fetchPolicy: 'cache-first',
  },
  watchQuery: {
    errorPolicy: 'all',
    fetchPolicy: 'cache-and-network',
  },
};

export const client = new ApolloClient.ApolloClient({
  cache,
  defaultOptions,
  link,
});
