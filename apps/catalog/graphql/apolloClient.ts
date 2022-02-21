import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.NX_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      // Executes queries against both the cache and the GraphQL server.
      // The query automatically updates if the result of the server-side
      // query modifies the cached fields.
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});
