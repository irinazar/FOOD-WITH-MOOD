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
          avatar: "Антон.png",
          password: await bcrypt.hash("1234567890", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Саша",
          email: "sasha@gmail.com",
          avatar: "Саша.png",
          password: await bcrypt.hash("1234567890", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Витя",
          email: "victor@gmail.com",
          avatar: "Витя.png",
          password: await bcrypt.hash("1234567890", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Юля",
          email: "julia@gmail.com",
          avatar: "Юля.png",
          password: await bcrypt.hash("1234567890", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Адам",
          email: "adam@gmail.com",
          avatar: "Адам.png",

          password: await bcrypt.hash("1234567890", 10),
          isAdmin: false,
          active: true,
        },
        {
          name: "Ирина",
          email: "irina@mail.ru",
          avatar: "Антон.png",
          password: await bcrypt.hash("12345678", 10),
          isAdmin: true,
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
