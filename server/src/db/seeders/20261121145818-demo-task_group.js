'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("task_groups", [
      { accessibility : "private" },
      { accessibility : "public" },
      { },
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("task_groups", null);
  }
};
