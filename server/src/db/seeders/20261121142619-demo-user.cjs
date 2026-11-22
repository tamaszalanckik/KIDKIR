"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _) {
        await queryInterface.bulkInsert("users", [
            {
                ID: "u-00-01",
                username: "kisaladar",
                email: "kisaladar@gmail.com",
                password:
                    "$2a$12$iX5W5U8EdSg0V3ky04iWEOtg8oAbeFNaSQCTpKHy5tisJfBUT7jv6",
                role: "admin",
            }, // jelszo1234
            {
                ID: "u-00-02",
                username: "nagyferenc",
                email: "nagyferi@gmail.com",
                password:
                    "$2a$12$$2a$12$oAKWizY6Ka6ynCtkUvF.W.I4h/tVqvjTi94ue3V4/7.9zL2rB2ofC",
                role: "teacher",
            }, // menojelszo54
            {
                ID: "u-00-03",
                username: "aranyosarpad",
                email: "arpad.aranyos@gmail.com",
                password:
                    "$2a$12$Wo74wEVgSXGeaFw5fdhNn.n3QALORfyc8/sh0h54jZPSpGIEbCzA6",
                role: "student",
            }, // aranybogar87
            {
                ID: "u-00-04",
                username: "kovacsjolan",
                email: "jolika.kovacs06@gmail.com",
                password:
                    "$2a$12$UFsgGo0KhzMU0hHvGxRrqOzSETbf7/oMaoExKfTqvt5Lp6Z56Mpbe",
                role: "student",
            }, // kovacska65!
        ]);
    },

    async down(queryInterface, _) {
        await queryInterface.bulkDelete("users", null);
    },
};
