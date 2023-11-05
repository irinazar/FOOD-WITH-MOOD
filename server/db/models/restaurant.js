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
    static associate({Comment, Favourite, Rating, Country, RestOwner, Booking, Image}) {
      this.hasMany(Comment, {foreignKey:'restaurantId'})
      this.hasMany(Favourite, {foreignKey:'restaurantId'})
      this.hasMany(Booking, {foreignKey:'restaurantId'})
      this.hasMany(Rating, {foreignKey:'restaurantId'})
      this.hasMany(Image, {foreignKey:'restaurantId'})
      this.belongsTo(Country, { foreignKey: 'countryId' })
      this.belongsTo(RestOwner, { foreignKey: 'restOwnerId' })
    }
  }
  Restaurant.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    adress: DataTypes.STRING,
    phone: DataTypes.STRING,
    coordX: DataTypes.FLOAT,
    coordY: DataTypes.FLOAT,
    status: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    restOwnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};