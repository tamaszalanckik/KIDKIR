"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _) {
        await queryInterface.bulkInsert("classes", [
            { ID: "cl-00-01", name: "13.B Matematika" },
            { ID: "cl-00-02", name: "10.A Földrajz" },
            { ID: "cl-00-03", name: "12.BC Angol nyelv" },
            { ID: "cl-00-04", name: "10.D Kémia" },
        ]);
    },

    async down(queryInterface, _) {
        await queryInterface.bulkDelete("classes", null);
    },
};
