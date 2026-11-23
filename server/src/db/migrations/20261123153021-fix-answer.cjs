'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("answers", "is_good_answer", {
      type: Sequelize.BOOLEAN,
    });
  },

  async down (queryInterface, _) {
    await queryInterface.removeColumn("answers", "is_good_answer");
  }
};
