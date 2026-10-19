'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Cars', [{
          id: 1, 
          title: 'C class',
          brand: 'Bmw',
          age: 12,
          createdAt: new Date(),
          updatedAt: new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Cars', {}, {});
  }
};
