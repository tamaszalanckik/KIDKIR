'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("tasks", [
      { type : "card", accessibility : "private"},
      { type : "pick", accessibility : "public"},
      { type : "write" },
      { accessibility : "public"},
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("tasks", null);
  }
};
