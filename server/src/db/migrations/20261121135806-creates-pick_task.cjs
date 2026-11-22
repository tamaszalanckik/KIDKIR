"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("pick_tasks", {
            ID: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            answer_count: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 4,
            },
        });
    },

    async down(queryInterface, _) {
        await queryInterface.dropTable("pick_tasks");
    },
};
