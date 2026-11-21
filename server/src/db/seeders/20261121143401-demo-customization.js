'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("customizations", [
      { language : "hu", mode: "light" },
      { mode: "dark" },
      { language : "en" },
      { language : "en", mode : "dark" }
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("customizations", null);
  }
};
