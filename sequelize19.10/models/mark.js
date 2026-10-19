'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mark extends Model {
    static associate({Student}) {
      this.belongsTo(Student, {as: 'student', foreignKey: 'studentId'})
    }
  }
  Mark.init({
    mathMark: DataTypes.INTEGER,
    physicsMark: DataTypes.INTEGER,
    englishLanguageMark: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Mark',
  });
  return Mark;
};