const models = require('../models');

const resolvers = {
  Query: {
    userById: (_, { uuid }) => models.user.findById(uuid),
  }
};
