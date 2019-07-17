const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar GraphQLDate
  scalar GraphQLTime
  scalar GraphQLDateTime

  type Query

  type Mutation
`;
