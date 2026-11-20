'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      this.belongsTo(models.Team, {
        as: 'team',
        foreignKey: 'teamId',
      })
        
    }
  }
  Player.init({
    nickname: DataTypes.TEXT,
    teamId: DataTypes.NUMBER,
    game: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};