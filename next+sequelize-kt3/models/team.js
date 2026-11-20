'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      this.hasMany(models.Player, {
        as: 'players',
        foreignKey: 'teamId'
      })
    }
  }
  Team.init({
    title: DataTypes.TEXT,
    country: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};