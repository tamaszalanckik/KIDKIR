const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env || {};

const options =
{
    "migrationStorageTableName": "migrations",
    
    "seederStorage": "sequelize",
    "seederStorageTableName": "seeders"
}

export default {
    production:
    {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,

        ...options
    },
    dev:
    {
        username: DB_USER,
        password: DB_PASSWORD,
        database: `${DB_NAME}_dev`,
        host: DB_HOST,
        dialect: DB_DIALECT,

        ...options
    }
}