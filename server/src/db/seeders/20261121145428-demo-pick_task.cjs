"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _) {
        await queryInterface.bulkInsert("pick_tasks", [
            {
                ID: "pt-00-01",
                question: "Milyen színű a piros alma?",
                answer_count: 2,
            },
            {
                ID: "pt-00-02",
                question: "Hány foga van egy cinegének?",
                answer_count: 6,
            },
            {
                ID: "pt-00-03",
                question: "Mi az, négy lába van, asztal, de nem szék?",
                answer_count: 4,
            },
        ]);
    },

    async down(queryInterface, _) {
        await queryInterface.bulkDelete("pick_tasks", null);
    },
};
