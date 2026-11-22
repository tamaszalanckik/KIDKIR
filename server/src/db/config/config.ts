import dotenv from "dotenv";
dotenv.config({ quiet: true });

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } =
    process.env || {};

console.log(DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT);

const options = {
    migrationStorageTableName: "migrations",

    seederStorage: "sequelize",
    seederStorageTableName: "seeders",
};

export default {
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,

        ...options,
    },
    dev: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: `${DB_NAME}_dev`,
        host: DB_HOST,
        dialect: DB_DIALECT,

        ...options,
    },
};
