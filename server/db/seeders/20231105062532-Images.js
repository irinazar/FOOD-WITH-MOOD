"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          restaurantId: 1,
          image: "paella1.jpeg",
        },
        {
          restaurantId: 1,
          image: "paella2.jpg",
        },
        {
          restaurantId: 1,
          image: "paella3.jpg",
        },
        {
          restaurantId: 2,
          image: "asador1.jpg",
        },
        {
          restaurantId: 2,
          image: "asador2.jpg",
        },
        {
          restaurantId: 2,
          image: "asador3.jpg",
        },
        {
          restaurantId: 3,
          image: "idilio1.jpeg",
        },
        {
          restaurantId: 3,
          image: "idilio2.jpg",
        },
        {
          restaurantId: 3,
          image: "idilio3.jpg",
        },
        {
          restaurantId: 4,
          image: "jasmin1.jpeg",
        },
        {
          restaurantId: 4,
          image: "jasmin2.jpg",
        },
        {
          restaurantId: 4,
          image: "jasmin3.jpg",
        },
        {
          restaurantId: 5,
          image: "insam1.png",
        },
        {
          restaurantId: 5,
          image: "insam2.png",
        },
        {
          restaurantId: 5,
          image: "insam3.jpg",
        },
        {
          restaurantId: 6,
          image: "kuksu1.png",
        },
        {
          restaurantId: 6,
          image: "kuksu2.webp",
        },
        {
          restaurantId: 6,
          image: "kuksu3.png",
        },
        {
          restaurantId: 7,
          image: "sicil1.jpg",
        },
        {
          restaurantId: 7,
          image: "sicil2.jpg",
        },
        {
          restaurantId: 7,
          image: "sicil3.jpg",
        },
        {
          restaurantId: 8,
          image: "oficina1.jpg",
        },
        {
          restaurantId: 8,
          image: "oficina2.jpg",
        },
        {
          restaurantId: 8,
          image: "oficina3.jpg",
        },
        {
          restaurantId: 9,
          image: "piazza1.jpg",
        },
        {
          restaurantId: 9,
          image: "piazza2.jpg",
        },
        {
          restaurantId: 9,
          image: "piazza3.jpg",
        },
        {
          restaurantId: 10,
          image: "darbars1.jpeg",
        },
        {
          restaurantId: 10,
          image: "darbars2.jpg",
        },
        {
          restaurantId: 10,
          image: "darbars3.jpeg",
        },
        {
          restaurantId: 11,
          image: "deli1.jpg",
        },
        {
          restaurantId: 11,
          image: "deli2.jpg",
        },
        {
          restaurantId: 11,
          image: "deli3.jpg",
        },
        {
          restaurantId: 12,
          image: "devi1.jpg",
        },
        {
          restaurantId: 12,
          image: "devi2.jpg",
        },
        {
          restaurantId: 12,
          image: "devi3.jpg",
        },
        {
          restaurantId: 13,
          image: "bjorn1.jpg",
        },
        {
          restaurantId: 13,
          image: "bjorn2.jpg",
        },
        {
          restaurantId: 13,
          image: "bjorn3.jpg",
        },
        {
          restaurantId: 14,
          image: "scandinavia1.jpg",
        },
        {
          restaurantId: 14,
          image: "scandinavia2.jpg",
        },
        {
          restaurantId: 14,
          image: "scandinavia3.jpg",
        },
        {
          restaurantId: 15,
          image: "ararat1.jpg",
        },
        {
          restaurantId: 15,
          image: "ararat2.jpg",
        },
        {
          restaurantId: 15,
          image: "ararat3.jpg",
        },
        {
          restaurantId: 16,
          image: "sayat1.jpg",
        },
        {
          restaurantId: 16,
          image: "sayat2.jpg",
        },
        {
          restaurantId: 16,
          image: "sayat3.jpg",
        },
        {
          restaurantId: 17,
          image: "gayane1.jpg",
        },
        {
          restaurantId: 17,
          image: "gayane2.jpg",
        },
        {
          restaurantId: 17,
          image: "gayane3.jpg",
        },
        {
          restaurantId: 18,
          image: "taksim1.png",
        },
        {
          restaurantId: 18,
          image: "taksim2.jpg",
        },
        {
          restaurantId: 18,
          image: "taksim3.jpg",
        },
        {
          restaurantId: 19,
          image: "bosfor1.png",
        },
        {
          restaurantId: 19,
          image: "bosfor2.jpeg",
        },
        {
          restaurantId: 19,
          image: "bosfor3.jpg",
        },
        {
          restaurantId: 20,
          image: "livan1.jpg",
        },
        {
          restaurantId: 20,
          image: "livan2.jpeg",
        },
        {
          restaurantId: 20,
          image: "livan3.png",
        },
        {
          restaurantId: 21,
          image: "beirut1.jpg",
        },
        {
          restaurantId: 21,
          image: "beirut2.jpeg",
        },
        {
          restaurantId: 21,
          image: "beirut3.jpg",
        },
        {
          restaurantId: 22,
          image: "pancho1.jpg",
        },
        {
          restaurantId: 22,
          image: "pancho2.jpg",
        },
        {
          restaurantId: 22,
          image: "pancho3.jpg",
        },
        {
          restaurantId: 23,
          image: "casa1.jpg",
        },
        {
          restaurantId: 23,
          image: "casa2.jpeg",
        },
        {
          restaurantId: 23,
          image: "casa3.jpg",
        },
        {
          restaurantId: 24,
          image: "michelada1.jpg",
        },
        {
          restaurantId: 24,
          image: "michelada2.jpg",
        },
        {
          restaurantId: 24,
          image: "michelada3.jpg",
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
