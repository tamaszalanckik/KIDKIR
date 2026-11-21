import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    class Task extends Model {};

    Task.init(
        {
            ID : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            type : {
                type : DataTypes.ENUM("card", "write", "pick"),
                defaultValue : "pick",
                allowNull : false
            },
            accessibility : {
                type : DataTypes.ENUM("private", "public"),
                defaultValue : "private",
                allowNull : false
            }
        },
        {
            sequelize,
            modelName : "Task",
            tableName : "tasks",
        }
    );

    return Task;
};