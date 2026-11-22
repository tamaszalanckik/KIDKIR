import { Sequelize, type Dialect } from "sequelize";

import configs from "./config/config";

const env = process.env.NODE_ENV as keyof typeof configs;
const actualConfig = configs[env];

const sequelize = new Sequelize(
    actualConfig.database!,
    actualConfig.username!,
    actualConfig.password,

    {
        host: actualConfig.host!,
        dialect: actualConfig.dialect as Dialect,

        logging: false,
    },
);

import model from "../models";
const models = model(sequelize);

(async () => {
    try {
        console.log("Trying to connect to the database...");

        await sequelize.authenticate();

        console.log("Database online");
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }

    try {
        console.log("Trying to sync changes to the database...");

        await sequelize.sync({ force: true });

        console.log("Synced changes to the database");
    } catch (error) {
        console.error("Failed to sync changes to the database", error);
    }
})();

export default { Sequelize, sequelize, ...models };
