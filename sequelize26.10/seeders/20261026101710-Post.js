'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        title: 'Modern Architecture Trends',
        status: 'published',
        publishedAt: new Date('2024-02-15T10:00:00Z'),
        authorId: 1,
        createdAt: new Date('2024-02-15T10:00:00Z'),
        updatedAt: new Date('2024-02-15T10:00:00Z')
      },
      {
        id: 2,
        title: 'Introduction to Web Development',
        status: 'published',
        publishedAt: new Date('2023-08-20T14:30:00Z'),
        authorId: 1,
        createdAt: new Date('2023-08-20T14:30:00Z'),
        updatedAt: new Date('2023-08-20T14:30:00Z')
      },
      {
        id: 3,
        title: 'Archived Notes from 2022',
        status: 'archived',
        publishedAt: new Date('2022-04-10T09:00:00Z'),
        authorId: 1,
        createdAt: new Date('2022-04-10T09:00:00Z'),
        updatedAt: new Date('2022-04-10T09:00:00Z')
      },
      {
        id: 4,
        title: 'AI in 2023 and Beyond',
        status: 'published',
        publishedAt: new Date('2023-11-05T12:00:00Z'),
        authorId: 2,
        createdAt: new Date('2023-11-05T12:00:00Z'),
        updatedAt: new Date('2023-11-05T12:00:00Z')
      },
      {
        id: 5,
        title: 'Legacy System Retrospective',
        status: 'draft',
        publishedAt: new Date('2021-06-18T16:00:00Z'),
        authorId: 3,
        createdAt: new Date('2021-06-18T16:00:00Z'),
        updatedAt: new Date('2021-06-18T16:00:00Z')
      },
      {
        id: 6,
        title: 'Old Guidelines 2022',
        status: 'published',
        publishedAt: new Date('2022-12-01T11:00:00Z'),
        authorId: 3,
        createdAt: new Date('2022-12-01T11:00:00Z'),
        updatedAt: new Date('2022-12-01T11:00:00Z')
      },
      {
        id: 7,
        title: 'Unpublished Draft Idea',
        status: 'draft',
        publishedAt: new Date('2024-01-05T10:00:00Z'),
        authorId: 4,
        createdAt: new Date('2024-01-05T10:00:00Z'),
        updatedAt: new Date('2024-01-05T10:00:00Z')
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
