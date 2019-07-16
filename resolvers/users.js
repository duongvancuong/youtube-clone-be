const models = require('../models');

const resolvers = {
  Query: {
    userById: (_, { id }) => models.user.findById(id),
  }
};

