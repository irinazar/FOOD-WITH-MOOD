'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentReply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({RestOwner, Comment}) {
      this.belongsTo(RestOwner, {foreignKey:'restOwnerId'})
      this.belongsTo(Comment, {foreignKey:'commentId'})
    }
  }
  CommentReply.init({
    body: DataTypes.TEXT,
    commentId: DataTypes.INTEGER,
    restOwnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CommentReply',
  });
  return CommentReply;
};