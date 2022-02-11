const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const app = express();

const getServerStart = async function () {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 3001 }, () => {
    console.log("server is running on port 3001");
  });
};

getServerStart();
