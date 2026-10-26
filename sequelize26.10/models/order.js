'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Связь: один заказ ко многим позициям
      Order.hasMany(models.Item, {
        foreignKey: 'orderId',
        as: 'items'
      });
    }
  }
  Order.init({
    number: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('new', 'paid', 'shipped'),
      defaultValue: 'new'
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};