'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("write_tasks", [
      { ID : "wt-00-01", question : "Mikor fedezte fel Kolombusz Kristóf Amerikát?" },
      { ID : "wt-00-02", question : "Melyik ország határos Magyarországgal északon?" },
      { ID : "wt-00-03", question : "6 + 4 - 15 = ?" },
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("write_tasks", null);
  }
};
