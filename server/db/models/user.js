"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Comment, Favourite, Booking, Preference, Rating}) {
      this.hasMany(Comment, {foreignKey:'userId'})
      this.hasMany(Favourite, {foreignKey:'userId'})
      this.hasMany(Booking, {foreignKey:'userId'})
      this.hasMany(Preference, {foreignKey:'userId'})
      this.hasMany(Rating, {foreignKey:'userId'})
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,

    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
