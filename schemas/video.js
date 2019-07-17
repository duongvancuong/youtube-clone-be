const { gql } = require('apollo-server-express');
  module.exports = gql`
    type Video {
    id: ID!
    title: String
    author: String
    viewer: Int
    url: String
    likers: [User!]
    no_likers: Int
    dislikers: [User!]
    no_dislikers: Int
  }

  input VideoInput {
    title: String
    author: String
    viewer: Int
    url: String
  }

  extend type Query {
    videoById(id: ID!): Video
    videos: [Video]
  }

  extend type Mutation {
    createVideo(input: VideoInput!): Video
    updateVideo(id: ID!, input: VideoInput!): Video
    deleteVideo(id: ID!): Boolean
    upViewer(id: ID!): Video
  }
`;
