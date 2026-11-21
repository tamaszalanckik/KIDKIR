'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("answers", [
      { ID : "a-00-01", value : "Ady Endre", description : "Mert ő járt Párizsban." },
      { ID : "a-00-02", value : "processzor", description : "Mert ez a számítógép agya." }
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("answers", null);
  }
};
