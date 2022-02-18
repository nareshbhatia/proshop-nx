import { ApolloClient, InMemoryCache } from '@apollo/client';

// TODO: Remove hard coded URL
// ApolloClient does not accept a relative URL like /api
export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3333',
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
