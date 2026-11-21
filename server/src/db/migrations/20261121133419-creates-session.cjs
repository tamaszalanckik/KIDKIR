'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("sessions", {
      ID : {
        type : Sequelize.UUID,
        primaryKey : true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      expires_in : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      session : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
      }
    });
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable("sessions");
  }
};
