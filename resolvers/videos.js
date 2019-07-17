const { Video, Likes } = require('../models');
const sequelize = require('sequelize');

const resolvers = {
  Query: {
    videoById: (_, { id }) => Video.findByPk(id),
    videos: () => Video.findAll(),
  },

  Video: {
    likers: async (parent) => {
      return parent.getUsersLikedVideo();
    },
    no_likers: async (parent) => {
      const no = await parent.getUsersLikedVideo();
      return no.length;
    },
    dislikers: async (parent) => {
      return parent.getUsersDislikedVideo();
    },
    no_dislikers: async (parent) => {
      const no = await parent.getUsersDislikedVideo();
      return no.length;
    }
  },

  Mutation: {
    upViewer: async (_, { id }) => {
      Video.increment('viewer', {
        by: 1,
        where: { id: id },
        logging: console.log
      });
    },
  },
};

module.exports = resolvers;
