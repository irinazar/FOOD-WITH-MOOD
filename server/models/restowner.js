"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RestOwner extends Model {

    static associate({ Restaurant }) {
      this.hasMany(Restaurant, { foreignKey: "restOwnerId" });
    }
  }
  RestOwner.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      active: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RestOwner",
    }
  );
  return RestOwner;
};
