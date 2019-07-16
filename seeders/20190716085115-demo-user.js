const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
		const pwdHash = await bcrypt.hash('123456', saltRounds);
    return queryInterface.bulkInsert('Users', [
      {
        email: 'user1@yopmail.com',
        password: pwdHash,
        firstName: 'first name 1',
        lastName: 'last name 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user2@yopmail.com',
        password: pwdHash,
        firstName: 'first name 2',
        lastName: 'last name 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user3@yopmail.com',
        password: pwdHash,
        firstName: 'first name 3',
        lastName: 'last name 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user4@yopmail.com',
        password: pwdHash,
        firstName: 'first name 4',
        lastName: 'last name 4',
				createdAt: new Date(),
				updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
