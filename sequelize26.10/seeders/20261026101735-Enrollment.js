'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enrollments', [
      {
        id: 1,
        studentId: 1,
        courseId: 1,
        grade: 95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        studentId: 1,
        courseId: 2,
        grade: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        studentId: 2,
        courseId: 2,
        grade: 85,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        studentId: 2,
        courseId: 3,
        grade: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        studentId: 3,
        courseId: 3,
        grade: 75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        studentId: 3,
        courseId: 4,
        grade: 88,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enrollments', null, {});
  }
};
