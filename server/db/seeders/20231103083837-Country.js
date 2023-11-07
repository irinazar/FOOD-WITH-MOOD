"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Countries",
      [
        {
          name: "Испания",
          description:
            "кухня Испании является «средиземноморской диетой» с приготовлением еды на основе фруктов, овощей, бобовых, риса, морепродуктов, злаков и зелени. Однако в реальности, в испанской кухне больше мясных блюд, чем, например, рыбных",
          img: "spain.jpg",
        },
        {
          name: "Корея ",
          description:
            "Корейская кухня в целом острая, при приготовлении блюд обильно используются пряности, особенно красный перец: из-за него многие корейские блюда имеют характерный красно-оранжевый цвет.",
            img: "korea.jpg",
        },
        {
          name: "Италия ",
          description:
            "Основная особенность итальянской кухни — простота. В состав многих блюд входит от четырех до восьми ингредиентов, при этом акцент делается не столько на продукты, сколько на подготовку и сам процесс приготовления еды.",
            img: "italy.jpg",
        },
        {
          name: "Индия ",
          description:
            "Базовые составляющие индийских национальных блюд – рис, бобовые и овощи. Большинство индийцев обязательно едят рис ежедневно, хотя бы один раз. Рецептов с ним несчетное количество, это не только основные блюда, но и десерты, сладости, даже мороженое. Индийцы-вегетарианцы восполняют белковые ресурсы в организме за счет бобовых. Огромной популярностью традиционно пользуются овощи, ведь их здесь в избытке.",
            img: "india.jpg",
        },
        {
          name: "Норвегия ",
          description:
            "Основные продукты, которые используются в норвежской кухне, — это разные виды рыбы, мясо и качественные молочные продукты. В ней до сих пор чувствуется сильное влияние традиций, которые сложились много столетий назад. Норвежцы и сегодня готовят старинные крестьянские блюда и блюда потомственных рыболовов.",
          img: "norway.jpeg",
        },

        {
          name: "Армения ",
          description:
            "На столе обязательно должны быть свежие овощи и фрукты, зелень, лаваш, различные сыры и молочные продукты — это то, без чего точно не обойдется армянское застолье.",
            img: "armenia.jpg",
        },
        {
          name: "Турция",
          description: "Турецкая кухня известна своим разнообразием блюд и использованием пряностей. Одним из известных блюд Турции является долма, приготовленная из виноградных листьев, фаршированных мясом и рисом.",
          img: "turkey.jpg",
        },
        
        {
          name: "Ливан",
          description: "Ливанская кухня известна своими ароматными специями и свежими овощами. Одним из популярных блюд Ливана является фалафель - круглые котлеты из нута и специй.",
          img: "lebanon.webp",
        },
        
        {
          name: "Мексика",
          description: "Мексиканская кухня славится своими пикантными блюдами и использованием авокадо, гуакамоле и традиционной мексиканской сальсы. Одним из известных блюд Мексики являются такос - мясные начинки, обернутые в тортильи.",
          img: "mexico.jpg",
        },
        {
          name: "Греция",
          description: "В греческих блюдах встречаются свежие овощи, оливковое масло, мед, сыры и пряности. Здесь вы найдете знаменитый греческий салат с оливками и сыром фета, муссаку (похожее на лазанью), а также ароматное греческое кофе и сладости, включая баклаву.",
          img: "greece.jpg",
        },
        
        {
          name: "Вьетнам",
          description: " Вьетнамская кухня — это симфония ароматов и вкусов, где акцент делается на свежих ингредиентах, травах и пряностях. Фоном для блюд служит рис, который сопровождается морепродуктами, мясом и множеством овощей. ",
          img: "vietnam.jpg",
        },
        
        {
          name: "Перу",
          description: "Перуанская кухня — это удивительное сочетание разнообразных вкусов и культурных влияний. Она славится своими морепродуктами, пикантными соусами и экзотическими ингредиентами, такими как киноа и амазонские фрукты. ",
          img: "peru.jpg",
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
