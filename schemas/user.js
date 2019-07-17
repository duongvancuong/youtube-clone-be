const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    email: String
    password: String
    firstName: String
    lastName: String
  }

  input UserInput {
    email: String
    password: String
    firstName: String
    lastName: ID
  }

  extend type Query {
    userById(id: ID!): User
    users: [User]
  }

  extend type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): Boolean
  }
`;
