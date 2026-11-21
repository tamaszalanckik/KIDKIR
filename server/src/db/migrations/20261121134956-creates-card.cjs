'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("cards", {
      ID : {
        type : Sequelize.UUID,
        primaryKey : true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      value : {
        type : Sequelize.STRING,
        allowNull : false
      },
      description : {
        type : Sequelize.STRING,
        allowNull : false,
        defaultValue : "No description provided."
      }
    });
  },
  
  async down (queryInterface, _) {
    await queryInterface.dropTable("cards");
  }
};
