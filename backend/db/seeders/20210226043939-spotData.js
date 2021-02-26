"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          price: 50,
          description: "This is just a test",
          name: "HairCuttery",
          address: "1313 mockingbird ln",
          type: "Barbershop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "This is just",
          name: "HairCutt",
          address: "1313 mockingbird ln",
          type: "Barbershop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "This is just a test",
          name: "HairCuttery",
          address: "1313 mockingbird ln",
          type: "Salon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "This is just",
          name: "HairCutt",
          address: "1313 mockingbird ln",
          type: "Salon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "This is just a test",
          name: "HairCuttery",
          address: "1313 mockingbird ln",
          type: "Donation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "This is just",
          name: "HairCutt",
          address: "1313 mockingbird ln",
          type: "Donation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
