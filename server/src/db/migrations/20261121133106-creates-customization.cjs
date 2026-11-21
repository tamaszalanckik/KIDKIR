'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("customizations", {
      ID : {
        type : Sequelize.UUID,
        primaryKey : true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      language : {
        type : Sequelize.ENUM("hu", "en"),
        defaultValue : "hu",
        allowNull : false,
      },
      mode : {
        type : Sequelize.ENUM("dark", "light"),
        defaultValue : "light",
        allowNull : false,
      },
    });
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable("customizations");
  }
};
