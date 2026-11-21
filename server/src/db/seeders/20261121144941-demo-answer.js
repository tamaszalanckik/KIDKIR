'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("answers", [
      { value : "Ady Endre", description : "Mert ő járt Párizsban." },
      { value : "processzor", description : "Mert ez a számítógép agya." },
      { value : "1848" }
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("answers", null);
  }
};
