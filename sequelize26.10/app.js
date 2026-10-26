const {User, Author, Book, Post, Student, Course, Enrollment} = require('./models');
const { Op } = require('sequelize');


async function getStudentsInAdvancedCourses() {
  return Student.findAll({
    include: [{
      model: Course,
      as: 'courses',
      where: { credits: { [Op.gt]: 3 } },
      required: true,
      through: { attributes: [] }
    }],
    order: [
      ['name', 'ASC'],
      [{ model: Course, as: 'courses' }, 'title', 'ASC']
    ],
  });
}

async function getUsersWithRecentPosts() {
  return User.findAll({
    include: [{
      model: Post,
      as: 'posts',
      where: { publishedAt: { [Op.gt]: '2023-01-01' } },
      required: true,
    }],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'publishedAt', 'DESC']
    ],
  });
}

async function getAllAuthorsIncludingEmpty() {
  return Author.findAll({
    include: [{
      model: Book,
      as: 'books',
      required: false,
    }],
    order: [['lastName', 'ASC']],
  });
}

async function main() {
  try {
    console.log('\n=== Users With Recent Posts (> 2023-01-01) ===');
    const users = await getUsersWithRecentPosts();
    console.log(JSON.stringify(users, null, 2));

    console.log('\n=== All Authors Including Empty (ordered by lastName) ===');
    const authors = await getAllAuthorsIncludingEmpty();
    console.log(JSON.stringify(authors, null, 2));

    console.log('=== Students in Advanced Courses (> 3 credits) ===');
    const students = await getStudentsInAdvancedCourses();
    console.log(JSON.stringify(students, null, 2));

  } catch (error) {
    console.error(error);
  }
}

main();