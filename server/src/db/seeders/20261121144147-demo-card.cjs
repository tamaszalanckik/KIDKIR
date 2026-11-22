"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _) {
        await queryInterface.bulkInsert("cards", [
            {
                ID: "cd-00-01",
                value: "alma",
                description: "Mert mindkettő lehet piros.",
            },
            {
                ID: "cd-00-02",
                value: "pöttyös labda",
                description: "Mert mindkettő lehet piros.",
            },

            { ID: "cd-00-03", value: "egér", description: "Mert ellenségek." },
            {
                ID: "cd-00-04",
                value: "macska",
                description: "Mert ellenségek.",
            },

            {
                ID: "cd-00-05",
                value: "dió",
                description: "Mert mindkettő csonthéjas.",
            },
            {
                ID: "cd-00-06",
                value: "mogyoró",
                description: "Mert mindkettő csonthéjas.",
            },
        ]);
    },

    async down(queryInterface, _) {
        await queryInterface.bulkDelete("cards", null);
    },
};
