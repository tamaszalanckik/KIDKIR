import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    class UserAnswersTask extends Model {};

    UserAnswersTask.init(
        {
            value : {
                type : DataTypes.STRING,
                allowNull : false
            }
        },
        {
            sequelize,
            modelName : "UserAnswersTask",
            tableName : "user_answers_task",
        }
    );

    return UserAnswersTask;
};