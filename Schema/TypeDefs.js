const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    name: String!
    author: String!
    publish: Int!
  }

  # Queries
  type Query {
    getAllBooks: [Book!]!
  }

  #Mutation
  type Mutation {
    createBook(name: String!, author: String!, publish: Int!): Book!
  }
`;

module.exports = { typeDefs };
