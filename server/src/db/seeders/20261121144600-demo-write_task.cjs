"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _) {
        await queryInterface.bulkInsert("write_tasks", [
            {
                ID: "wt-00-01",
                question: "Mikor fedezte fel Kolombusz Kristóf Amerikát?",
                answer_value: "1492",
                answer_description: "No description provided.",
            },
            {
                ID: "wt-00-02",
                question: "Melyik ország határos Magyarországgal északon?",
                answer_value: "Szlovákia",
                answer_description: "A térkép nem hazudik.",
            },
            { 
                ID: "wt-00-03", 
                question: "6 + 4 - 15 = ?",
                answer_value: "-5",
                answer_description: "A számológép nem hazudik.",
            },
        ]);
    },

    async down(queryInterface, _) {
        await queryInterface.bulkDelete("write_tasks", null);
    },
};
