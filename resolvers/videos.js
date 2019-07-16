const { Video } = require('../models');

const resolvers = {
  Query: {
    videoById: (_, { id }) => Video.findByPk(id),
    videos: () => Video.findAll(),
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
