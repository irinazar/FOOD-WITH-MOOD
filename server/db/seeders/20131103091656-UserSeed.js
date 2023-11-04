const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "dbvkjrd",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsGZ98NkcA4yU1hoh8BUG2mDdBMbZku3ijdepPkhM0g&s",
          password:  await bcrypt.hash("123", 10),
          isAdmin: false,
          active: true,
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
