import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class Answer extends Model {}

    Answer.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            value: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "No description provided.",
            },
            is_good_answer: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            sequelize,
            modelName: "Answer",
            tableName: "answers",
        },
    );

    return Answer;
};
