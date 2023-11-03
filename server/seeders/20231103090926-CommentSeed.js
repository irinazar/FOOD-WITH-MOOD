"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          body: "Классный ресторан!",
          userId: 1,
          restaurantId: 1,
        },
        {
          body: "Классный ресторан!",
          userId: 1,
          restaurantId: 2,
        },
        {
          body: "Классный ресторан!",
          userId: 1,
          restaurantId: 3,
        },
        {
          body: "Классный ресторан!",
          userId: 1,
          restaurantId: 4,
        },
        {
          body: "Классный ресторан!",
          userId: 1,
          restaurantId: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
