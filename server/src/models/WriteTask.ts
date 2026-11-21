import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    class WriteTask extends Model {};

    WriteTask.init(
        {
             ID : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            question : {
                type : DataTypes.STRING,
                allowNull : false
            }
        },
        {
            sequelize,
            modelName : "WriteTask",
            tableName : "write_tasks",
        }
    );

    return WriteTask;
};