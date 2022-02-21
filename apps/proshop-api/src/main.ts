import { readFileSync } from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { dataSources } from './app/datasources';
import { resolvers } from './app/resolvers';

const port = parseInt(process.env.NX_API_PORT, 10);

async function startApolloServer() {
  // read the schema (convert the file Buffer to a UTF-8 string)
  const typeDefs = readFileSync(
    path.join(__dirname, '/assets/schema.graphql')
  ).toString('utf-8');

  // start apollo server
  const server = new ApolloServer({ typeDefs, resolvers, dataSources });
  const { url } = await server.listen({ port });

  console.log(`ProShop API ready at ${url}`);
}

startApolloServer();
