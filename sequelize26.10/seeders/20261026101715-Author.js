'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        id: 1,
        firstName: 'Leo',
        lastName: 'Tolstoy',
        country: 'Russia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName: 'Fyodor',
        lastName: 'Dostoevsky',
        country: 'Russia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstName: 'George',
        lastName: 'Orwell',
        country: 'United Kingdom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        firstName: 'Haruki',
        lastName: 'Murakami',
        country: 'Japan',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
