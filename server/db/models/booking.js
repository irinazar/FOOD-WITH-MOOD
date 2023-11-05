'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Restaurant}) {
      this.belongsTo(User, {foreignKey:'userId'})
      this.belongsTo(Restaurant, {foreignKey:'restaurantId'})
    }
  }
  Booking.init({
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    bookerName: DataTypes.STRING,
    bookerPhone: DataTypes.STRING,
    date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};