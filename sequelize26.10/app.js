const { User, Author, Book, Post, Student, Course, Enrollment, Order, Item } = require('./models');
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
async function getOrdersWithBulkItems() {
  return Order.findAll({
    include: [{
      model: Item,
      as: 'items',
      where: { quantity: { [Op.gt]: 2 } },
      required: true,
    }],
    order: [
      ['createdAt', 'DESC'],
      [{ model: Item, as: 'items' }, 'price', 'DESC']
    ],
  });
}


async function getActiveUsersWithPublishedPosts() {
  return User.findAll({
    where: { isActive: true },
    include: [{
      model: Post,
      as: 'posts',
      where: { status: 'published' },
      required: true,
    }],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'createdAt', 'DESC']
    ],
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

    console.log('\n=== Students in Advanced Courses (> 3 credits) ===');
    const students = await getStudentsInAdvancedCourses();
    console.log(JSON.stringify(students, null, 2));

    console.log('\n=== Orders With Bulk Items (> 2 items) ===');
    const orders = await getOrdersWithBulkItems();
    console.log(JSON.stringify(orders, null, 2));

    console.log('\n=== Active Users With Published Posts ===');
    const activeUsers = await getActiveUsersWithPublishedPosts();
    console.log(JSON.stringify(activeUsers, null, 2));

  } catch (error) {
    console.error(error);
  }
}

main();