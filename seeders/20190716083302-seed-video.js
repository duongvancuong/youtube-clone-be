'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
      {
        title: 'Interstellar | Beautiful Chillstep Mix',
        author: 'BLUME',
        url: 'https://youtu.be/eLeIJtLebZk',
        viewer: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Interstellar | Beautiful Chillstep Mix',
        author: 'BLUME',
        url: 'https://youtu.be/eLeIJtLebZk',
        viewer: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos', null, {});
  }
};
