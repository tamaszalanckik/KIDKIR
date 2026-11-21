'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("cards", [
      { value : "alma", description : "Mert mindkettő lehet piros." },
      { value : "pöttyös labda", description : "Mert mindkettő lehet piros." },

      { value : "egér", description : "Mert ellenségek." },
      { value : "macska", description : "Mert ellenségek." },

      { value : "dió", description : "Mert mindkettő csonthéjas." },
      { value : "mogyoró", description : "Mert mindkettő csonthéjas." },

      { value : "labrador" },
      { value : "németjuhász" },
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("cards", null);
  }
};
