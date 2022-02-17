import { ApolloClient, InMemoryCache } from "@apollo/client";

// TODO: Remove hard coded URL
// ApolloClient does not accept a relative URL like /api
export const apolloClient = new ApolloClient({
  uri: "http://localhost:3333",
  cache: new InMemoryCache(),
});
