'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
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
  Rating.init({
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};