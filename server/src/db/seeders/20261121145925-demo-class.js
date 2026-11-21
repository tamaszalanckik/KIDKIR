'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert("classes", [
      { name : "13.B Matematika" },
      { name : "10.A Földrajz" },
      { name : "12.BC Angol nyelv" },
      { name : "10.D Kémia" },
    ]);
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete("classes", null);
  }
};
