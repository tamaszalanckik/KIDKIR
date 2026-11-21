import { Sequelize, type Dialect } from "sequelize";

import configs from "./config/config";
const env = process.env.NODE_ENV as keyof typeof configs;
const actualConfig = configs[env];

const sequelize = new Sequelize(
    actualConfig.database!,
    actualConfig.username!,
    actualConfig.password,
    
    {
        host : actualConfig.host!,
        dialect : actualConfig.dialect as Dialect,
        
        logging : false
    }
);

import model from "../models";
const models = model(sequelize);

export default { Sequelize, sequelize, ...models };