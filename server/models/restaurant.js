'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    adress: DataTypes.STRING,
    coordX: DataTypes.FLOAT,
    coordY: DataTypes.FLOAT,
    img: DataTypes.TEXT,
    status: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    restOwnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};