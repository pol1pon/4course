'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        title: 'Modern Architecture Trends',
        publishedAt: new Date('2024-02-15T10:00:00Z'),
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Introduction to Web Development',
        publishedAt: new Date('2023-08-20T14:30:00Z'),
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Archived Notes from 2022',
        publishedAt: new Date('2022-04-10T09:00:00Z'),
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'AI in 2023 and Beyond',
        publishedAt: new Date('2023-11-05T12:00:00Z'),
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Legacy System Retrospective',
        publishedAt: new Date('2021-06-18T16:00:00Z'),
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: 'Old Guidelines 2022',
        publishedAt: new Date('2022-12-01T11:00:00Z'),
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
