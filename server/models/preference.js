'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Country}) {
      this.belongsTo(User, {foreignKey:'userId'})
      this.belongsTo(Country, {foreignKey:'countryId'})
    }
  }
  Preference.init({
    userId: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Preference',
  });
  return Preference;
};