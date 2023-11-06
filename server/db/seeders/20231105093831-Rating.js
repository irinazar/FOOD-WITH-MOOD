"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Ratings", [
      {
        userId: 1,
        restaurantId: 1,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 2,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 3,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 4,
        rating: 4,
      },
      {
        userId: 1,
        restaurantId: 5,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 6,
        rating: 4,
      },
      {
        userId: 1,
        restaurantId: 7,
        rating: 3,
      },
      {
        userId: 1,
        restaurantId: 8,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 9,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 10,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 11,
        rating: 4,
      },
      {
        userId: 1,
        restaurantId: 12,
        rating: 4,
      },
      {
        userId: 1,
        restaurantId: 13,
        rating: 4,
      },
      {
        userId: 1,
        restaurantId: 14,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 15,
        rating: 4,
      },
      {
        userId: 1,
        restaurantId: 16,
        rating: 3,
      },
      {
        userId: 1,
        restaurantId: 17,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 18,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 19,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 20,
        rating: 4,
      },
      {
        userId: 1,
        restaurantId: 21,
        rating: 3,
      },
      {
        userId: 1,
        restaurantId: 22,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 23,
        rating: 5,
      },
      {
        userId: 1,
        restaurantId: 24,
        rating: 5,
      },


    ]);
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
