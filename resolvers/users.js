const { User } = require('../models');

const resolvers = {
  Query: {
    userById: (_, { id }) => User.findById(id),
    users: () => User.findAll(),
  },
  Mutation: {
    createUser: async (_, data, __) => {
      User.create(data);
    },
  },
};

module.exports = resolvers;
