"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          title: "Ресторан 'Вкусная Италия'",
          description:
            "Ресторан 'Вкусная Италия' - это место, где вы можете насладиться аутентичными итальянскими блюдами. Мы предлагаем широкий выбор паст, пицц и десертов, приготовленных с любовью и страстью к итальянской кухне.",
            adress: "Москва, ул. Итальянская, 123",
          coordX: 55.751123,
          coordY: 37.586987,
          img: "italy.jpg",
          status: "Pending",
          countryId: 1,
          restOwnerId: 1,
        },
        {
          title: "Французская Пекарня 'Le Croissant'",
          description:
            "Французская Пекарня 'Le Croissant' - это уютное место, где вы можете насладиться свежеиспеченными круассанами, багетами и другими французскими выпечкой. Откройте для себя вкус Франции у нас!",
            adress: "Москва, ул. Парижская, 45",
          coordX: 55.748932,
          coordY: 37.591681,
          img: "croissant.jpg",
          status: "Pending",
          countryId: 2,
          restOwnerId: 2,
        },
        {
          title: "Суши Мастер",
          description:
            "Ресторан 'Суши Мастер' - это место для любителей японской кухни. Мы предлагаем широкий выбор суши, сашими и роллов, приготовленных из свежих ингредиентов.",
            adress: "Москва, ул. Сакэ, 67",
          coordX: 55.75689,
          coordY: 37.618247,
          img: "sushi.jpg",
          status: "Pending",
          countryId: 3,
          restOwnerId: 3,
        },
        {
          title: "Грузинская Дача",
          description:
            "Ресторан 'Грузинская Дача' - это место для настоящих ценителей грузинской кухни. Наслаждайтесь барбекю, хачапури и другими блюдами в аутентичной обстановке.",
            adress: "Москва, ул. Тбилисская, 34",
          coordX: 55.754503,
          coordY: 37.603166,
          img: "georgia.jpg",
          status: "Pending",
          countryId: 4,
          restOwnerId: 4,
        },
        {
          title: "Мексиканский Рай",
          description:
            "Ресторан 'Мексиканский Рай' - ваш путь в мир мексиканской кухни. Наслаждайтесь тостадас, энчиладас и другими блюдами с огоньком и мексиканским вкусом.",
            adress: "Москва, ул. Такос, 89",
          coordX: 55.757214,
          coordY: 37.594457,
          img: "mexico.jpg",
          status: "Pending",
          countryId: 5,
          restOwnerId: 5,
        },
        {
          title: "Средиземноморская Оазис",
          description:
            "Ресторан 'Средиземноморская Оазис' предлагает блюда средиземноморской кухни. Наслаждайтесь ароматными тапасами, оливковым маслом и морепродуктами.",
            adress: "Москва, ул. Оливковая, 21",
          coordX: 55.748507,
          coordY: 37.61011,
          img: "mediterranean.jpg",
          status: "Pending",
          countryId: 6,
          restOwnerId: 6,
        },
        {
          title: "Японский Сад",
          description:
            "Ресторан 'Японский Сад' - ваш выбор для традиционной японской кухни. Наслаждайтесь аутентичными японскими блюдами в уютной атмосфере нашего ресторана.",
            adress: "Москва, ул. Сакура, 3",
          coordX: 55.752325,
          coordY: 37.603241,
          img: "japan.jpg",
          status: "Pending",
          countryId: 7,
          restOwnerId: 7,
        },
        {
          title: "Американская Долина",
          description:
            "Ресторан 'Американская Долина' предлагает вкусную американскую кухню. Наслаждайтесь гамбургерами, картофельными чипсами и сочными стейками.",
            adress: "Москва, ул. Американская, 5",
          coordX: 55.756875,
          coordY: 37.600174,
          img: "america.jpg",
          status: "Pending",
          countryId: 8,
          restOwnerId: 8,
        },
        {
          title: "Китайская Деревня",
          description:
            "Ресторан 'Китайская Деревня' - это ваш шанс попробовать аутентичные китайские блюда. Наслаждайтесь лапшой, жареным рисом и вкусными закусками.",
            adress: "Москва, ул. Пекинская, 17",
          coordX: 55.755984,
          coordY: 37.598872,
          img: "china.jpg",
          status: "Pending",
          countryId: 9,
          restOwnerId: 9,
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
