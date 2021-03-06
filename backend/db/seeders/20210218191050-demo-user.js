"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Demo",
          lastName: "User",
          email: "demo@gmail.com",
          username: "demoUser",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Test",
          lastName: "One",
          email: faker.internet.email(),
          username: "Test1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          firstName: "Test",
          lastName: "Two",
          email: faker.internet.email(),
          username: "Test2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["demoUser", "Test1", "Test2"] },
      },
      {}
    );
  },
};
