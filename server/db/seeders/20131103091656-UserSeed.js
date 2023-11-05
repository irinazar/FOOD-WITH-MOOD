const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Антон",
          email: "anton@gmail.com",
          avatar: "../../client/public/img/users/Антон.png",
          password:  await bcrypt.hash("123", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Саша",
          email: "sasha@gmail.com",
          avatar: "../../client/public/img/users/Саша.png",
          password:  await bcrypt.hash("123", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Витя",
          email: "victor@gmail.com",
          avatar: "../../client/public/img/users/Витя.png",
          password:  await bcrypt.hash("123", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Юля",
          email: "julia@gmail.com",
          avatar: "../../client/public/img/users/Юля.png",
          password:  await bcrypt.hash("123", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Адам",
          email: "adam@gmail.com",
          avatar: "../../client/public/img/users/Адам.png",
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
