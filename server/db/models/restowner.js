"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RestOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CommentReply, Restaurant }) {
      this.hasMany(CommentReply, { foreignKey: "restOwnerId" });
      this.hasMany(Restaurant, { foreignKey: "restOwnerId" });
    }
  }
  RestOwner.init(
    {
      name: DataTypes.STRING,
      telephone: DataTypes.STRING,
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
