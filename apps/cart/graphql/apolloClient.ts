import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  // Specify URL based on where we are running - client or server side
  // See https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
  uri:
    typeof window === 'undefined'
      ? process.env.NX_SERVER_SIDE_API_URL
      : process.env.NX_CLIENT_SIDE_API_URL,
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
