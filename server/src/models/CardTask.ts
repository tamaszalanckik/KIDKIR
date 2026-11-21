import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    class CardTask extends Model {};

    CardTask.init(
        {
            ID : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            pair_count : {
                type : DataTypes.INTEGER,
                allowNull : false,
                defaultValue : 4
            }
        },
        {
            sequelize,
            modelName : "CardTask",
            tableName : "card_tasks",
        }
    );

    return CardTask;
};