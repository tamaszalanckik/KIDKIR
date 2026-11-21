'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("write_tasks", [
      { question : "Mikor fedezte fel Kolombusz Kristóf Amerikát?" },
      { question : "Melyik ország határos Magyarországgal északon?" },
      { question : "6 + 4 - 15 = ?" },
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("write_tasks", null);
  }
};
