'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      adress: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      coordX: {
        type: Sequelize.FLOAT
      },
      coordY: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.STRING
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Countries',
        key: 'id',
        },
        onDelete: 'CASCADE'
      },
      restOwnerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RestOwners',
          key: 'id',
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  }
};