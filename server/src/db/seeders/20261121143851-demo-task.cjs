"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _) {
        await queryInterface.bulkInsert("tasks", [
            { ID: "t-00-01", type: "card", accessibility: "private" },
            { ID: "t-00-02", type: "pick", accessibility: "public" },
            { ID: "t-00-03", type: "write", accessibility: "private" },
        ]);
    },

    async down(queryInterface, _) {
        await queryInterface.bulkDelete("tasks", null);
    },
};
