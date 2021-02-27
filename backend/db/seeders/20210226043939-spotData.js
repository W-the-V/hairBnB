"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          price: 50,
          description: "Another option for a barbershop",
          name: "The Barbershop II",
          address: faker.address.streetAddress(),
          type: "Barbershop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "The original barbershop",
          name: "The Barbershop",
          address: faker.address.streetAddress(),
          type: "Barbershop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "The first Salon",
          name: "The Salon",
          address: faker.address.streetAddress(),
          type: "Salon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "The second Salon",
          name: "The Salon II",
          address: faker.address.streetAddress(),
          type: "Salon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "Donate hair here!",
          name: "Locks of Love",
          address: faker.address.streetAddress(),
          type: "Donation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 50,
          description: "Help those in need!",
          name: "Wigs for Charity",
          address: faker.address.streetAddress(),
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
