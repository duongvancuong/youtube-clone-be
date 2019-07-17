'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dislikes',
      {
        id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        UserId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: 'users',
            key: 'id'
          },
          allowNull: false
        },
        VideoId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: 'videos',
            key: 'id'
          },
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dislikes');
  }
};
