import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class WriteTask extends Model {}

    WriteTask.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            question: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            answer_value: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            answer_description: {
                type: DataTypes.STRING,
                defaultValue: "No description provided."
            },
        },
        {
            sequelize,
            modelName: "WriteTask",
            tableName: "write_tasks",
        },
    );

    return WriteTask;
};
