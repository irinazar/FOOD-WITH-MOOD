'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
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
  Favourite.init({
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};