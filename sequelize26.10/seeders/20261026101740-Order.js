'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        id: 1,
        number: 'ORD-2024-001',
        status: 'paid',
        createdAt: new Date('2024-03-10T12:00:00Z'),
        updatedAt: new Date('2024-03-10T12:00:00Z')
      },
      {
        id: 2,
        number: 'ORD-2024-002',
        status: 'shipped',
        createdAt: new Date('2024-03-15T16:30:00Z'),
        updatedAt: new Date('2024-03-15T16:30:00Z')
      },
      {
        id: 3,
        number: 'ORD-2024-003',
        status: 'new',
        createdAt: new Date('2024-03-01T10:00:00Z'),
        updatedAt: new Date('2024-03-01T10:00:00Z')
      },
      {
        id: 4,
        number: 'ORD-2024-004',
        status: 'new',
        createdAt: new Date('2024-02-20T08:00:00Z'),
        updatedAt: new Date('2024-02-20T08:00:00Z')
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
