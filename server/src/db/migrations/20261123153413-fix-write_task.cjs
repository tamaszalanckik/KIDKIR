'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("write_tasks", "answer_value", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("write_tasks", "answer_description", {
      type: Sequelize.STRING,
      defaultValue: "No description provided.",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("write_tasks", "answer_value");

    await queryInterface.removeColumn("write_tasks", "answer_description");
  }
};
