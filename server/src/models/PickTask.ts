import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class PickTask extends Model {}

    PickTask.init(
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
            answer_count: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 4,
            },
        },
        {
            sequelize,
            modelName: "PickTask",
            tableName: "pick_tasks",
        },
    );

    return PickTask;
};
