'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("task_groups", {
      ID : {
        type : Sequelize.UUID,
        primaryKey : true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      accessibility : {
        type : Sequelize.ENUM("private", "public"),
        defaultValue : "private",
        allowNull : false
      }
    });
  },
  
  async down (queryInterface, _) {
    await queryInterface.dropTable("task_groups");
  }
};
