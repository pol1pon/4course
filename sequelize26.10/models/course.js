'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsToMany(models.Student, {
        through: models.Enrollment,
        foreignKey: 'courseId',
        otherKey: 'studentId',
        as: 'students'
      });
      Course.hasMany(models.Enrollment, { foreignKey: 'courseId' });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    credits: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};  