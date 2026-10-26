'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      {
        id: 1,
        productName: 'Mechanical Keyboard',
        quantity: 5,
        price: 120.00,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        productName: 'Gaming Mouse',
        quantity: 3,
        price: 65.50,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        productName: 'USB-C Cable',
        quantity: 1,
        price: 15.00,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        productName: 'Ultra-wide Monitor',
        quantity: 4,
        price: 450.00,
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        productName: 'Monitor Arm',
        quantity: 4,
        price: 85.00,
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        productName: 'Laptop Stand',
        quantity: 1,
        price: 40.00,
        orderId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        productName: 'Mousepad',
        quantity: 2,
        price: 20.00,
        orderId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
