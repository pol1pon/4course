'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsToMany(models.Course, {
        through: models.Enrollment,
        foreignKey: 'studentId',
        otherKey: 'courseId',
        as: 'courses'
      });
      Student.hasMany(models.Enrollment, { foreignKey: 'studentId' });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    group: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};