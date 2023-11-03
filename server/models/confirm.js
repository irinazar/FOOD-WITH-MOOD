"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Confirm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Confirm.init(
    {
      randomString: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Confirm",
    }
  );
  return Confirm;
};
