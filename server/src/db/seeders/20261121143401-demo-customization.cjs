'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("customizations", [
      { ID : "c-01", language : "hu", mode : "light" },
      { ID : "c-02", language : "hu", mode : "dark" },
      { ID : "c-03", language : "en", mode : "light" },
      { ID : "c-04", language : "en", mode : "dark" }
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("customizations", null);
  }
};
