const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "RestOwners",
      [
        {
          name: "Иван Петров",
          email: "ivan@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar1.jpg",
          active: true,
        },
        {
          name: "Анна Иванова",
          email: "anna@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar2.jpg",
          active: true,
        },
        {
          name: "Сергей Смирнов",
          email: "sergei@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar3.jpg",
          active: true,
        },
        {
          name: "Ольга Кузнецова",
          email: "olga@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar4.jpg",
          active: true,
        },
        {
          name: "Дмитрий Егоров",
          email: "dmitriy@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar5.jpg",
          active: true,
        },
        {
          name: "Елена Морозова",
          email: "elena@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar6.jpg",
          active: true,
        },
        {
          name: "Максим Новиков",
          email: "maxim@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar7.jpg",
          active: true,
        },
        {
          name: "Карина Белова",
          email: "karina@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar8.jpg",
          active: true,
        },
        {
          name: "Андрей Гребенков",
          email: "andrey@example.com",
          password: await bcrypt.hash("123", 10),
          avatar: "avatar9.jpg",
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
