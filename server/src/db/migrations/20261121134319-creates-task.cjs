'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {
      ID : {
        type : Sequelize.UUID,
        primaryKey : true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      type : {
        type : Sequelize.ENUM("card", "write", "pick"),
        defaultValue : "pick",
        allowNull : false
      },
      accessibility : {
        type : Sequelize.ENUM("private", "public"),
        defaultValue : "private",
        allowNull : false
      }
    });
  },
  
  async down (queryInterface, _) {
    await queryInterface.dropTable("tasks");
  }
};
