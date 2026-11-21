import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    class Card extends Model {};

    Card.init(
        {
            ID : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            value : {
                type : DataTypes.STRING,
                allowNull : false
            },
            description : {
                type : DataTypes.STRING,
                allowNull : false,
                defaultValue : "No description provided."
            }
        },
        {
            sequelize,
            modelName : "Card",
            tableName : "cards",
        }
    );

    return Card;
};