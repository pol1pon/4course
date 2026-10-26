'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        id: 1,
        title: 'Advanced Algorithms',
        credits: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Machine Learning',
        credits: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Intro to History',
        credits: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Physical Education',
        credits: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
