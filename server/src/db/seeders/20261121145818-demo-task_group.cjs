"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _) {
        await queryInterface.bulkInsert("task_groups", [
            { ID: "tg-00-01", accessibility: "private" },
            { ID: "tg-00-02", accessibility: "public" },
        ]);
    },

    async down(queryInterface, _) {
        await queryInterface.bulkDelete("task_groups", null);
    },
};
