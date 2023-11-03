'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {

    static associate({Country, RestOwner}) {
      this.belongsTo(Country, { foreignKey: 'countryId' })
      this.belongsTo(RestOwner, { foreignKey: 'restOwnerId' })

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