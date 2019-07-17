const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const resolvers = {
  Query: {
    userById: (_, { id }) => User.findByPk(id),
    users: () => User.findAll(),
  },
  Mutation: {
    createUser: (_, { input }, __) => {
			bcrypt.hash(input.password, saltRounds, async function(err, hash) {
				return await User.create({ ...input, password: hash });	
			});
    },
  },
};

module.exports = resolvers;
