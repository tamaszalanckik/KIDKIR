'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("pick_tasks", [
      { question : "Milyen színű a piros alma?", answer_count : 2},
      { question : "Hány foga van egy cinegének?", answer_count : 6},
      { question : "Mi az, négy lába van, asztal, de nem szék?" }
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("pick_tasks", null);
  }
};
