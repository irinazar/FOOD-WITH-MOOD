"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CommentReplies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.TEXT,
      },
      commentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Comments",
          },
          key: "id",
        },
        onDelete: 'CASCADE'
      },
      restOwnerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "RestOwners",
          },
          key: "id",
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CommentReplies");
  },
};
