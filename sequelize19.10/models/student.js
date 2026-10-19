'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
   
    static associate({Mark}) {
      this.hasOne(Mark, {as: 'marks', foreignKey: 'studentId'})
    }
  }
  Student.init({
    name: DataTypes.TEXT,
    course: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};