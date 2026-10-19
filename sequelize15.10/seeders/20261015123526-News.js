'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('News', [{
      id: 1, 
      title: 'new news',
      pub_date: new Date('2024-10-12'),
      author_name: 'nick',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', {}, {});
  }
};
