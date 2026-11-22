import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class TaskGroup extends Model {}

    TaskGroup.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            accessibility: {
                type: DataTypes.ENUM("private", "public"),
                defaultValue: "private",
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "TaskGroup",
            tableName: "task_groups",
        },
    );

    return TaskGroup;
};
