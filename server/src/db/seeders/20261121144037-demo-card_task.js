'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("card_tasks", [
      { pair_count : 6 },
      { pair_count : 8 },
      { }
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("card_tasks", null);
  }
};
