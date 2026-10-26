'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        id: 1,
        title: 'War and Peace',
        year: 1869,
        genre: 'Historical Novel',
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Anna Karenina',
        year: 1877,
        genre: 'Realist Novel',
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Crime and Punishment',
        year: 1866,
        genre: 'Psychological Fiction',
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: '1984',
        year: 1949,
        genre: 'Dystopian',
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
